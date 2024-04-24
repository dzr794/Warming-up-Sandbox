import { validateInputs, detectEnpoint, PrintForecast } from '../../src/weatherPrediction/utils/utils';

import { LocationAndDateTime } from "../../src/weatherPrediction/types/forecastTypes";

import { predictFutureWeather } from "../../src/weatherPrediction/predictFutureWeather";

describe('Testing days prediction switch', ()=>{

  test('Shoud be past endpoint', () => { 
    const historicInputs:LocationAndDateTime = {
      latitude: 3.359889,
      longitude: -76.638565,
      date: '2024-02-24',
      time: '16:15:30'
    }
    const past = validateInputs(historicInputs);
    const endpoint = detectEnpoint( past.unixTimestamp );

    expect(endpoint).toBe('past');
  });

  test('Shoud be present endpoint', () => { 
    const presentInputs:LocationAndDateTime = {
      latitude: 3.359889,
      longitude: -76.638565,
      date: '2024-04-30',
      time: '16:15:30'
    }

    const present = validateInputs(presentInputs);
    const endpoint = detectEnpoint( present.unixTimestamp );

    expect(endpoint).toBe('present');
  });

  test('Shoud be future endpoint', () => { 
    const futureInputs:LocationAndDateTime = {
      latitude: 3.359889,
      longitude: -76.638565,
      date: '2024-06-24',
      time: '16:15:30'
    }
    
    const future = validateInputs(futureInputs);
    const endpoint = detectEnpoint( future.unixTimestamp );

    expect(endpoint).toBe('future');
  });

});

describe('Testing validations', () => { 
  test('should be invalid date (time)', () => { 
    
    const futureInputs:LocationAndDateTime = {
      latitude: 3.359889,
      longitude: -76.638565,
      date: '2024-06-24',
      time: '1:15:30'
    }

    const result = validateInputs(futureInputs);

    expect(result.areValid).toBeFalsy();
    console.log(result.error);
  });

  test('should be invalid date (date)', () => { 
    
    const mockInputs:LocationAndDateTime = {
      latitude: 3.359889,
      longitude: -76.638565,
      date: '24-06-24',
      time: '10:10:30'
    }

    const result = validateInputs(mockInputs);

    expect(result.areValid).toBeFalsy();
    console.log(result.error);
  });

  test('should be valid Date and time', () => { 
    
    const mockInputs:LocationAndDateTime = {
      latitude: 3.359889,
      longitude: -76.638565,
      date: '2024-06-24',
      time: '10:10:30'
    }

    const result = validateInputs(mockInputs);

    expect(result.areValid).toBeTruthy();
  });

  test('should be invalid Latitude', () => { 
    
    const mockInputs:LocationAndDateTime = {
      latitude: 103.359889,
      longitude: 6.638565,
      date: '2024-06-24',
      time: '10:10:30'
    }

    const result = validateInputs(mockInputs);

    expect(result.areValid).toBeFalsy();
    console.log(result.error);
  });

  test('should be invalid Longitude', () => { 
    
    const mockInputs:LocationAndDateTime = {
      latitude: 13.359889,
      longitude: 206.638565,
      date: '2024-06-24',
      time: '10:10:30'
    }

    const result = validateInputs(mockInputs);

    expect(result.areValid).toBeFalsy();
    console.log(result.error);
  });
})

describe('Testing predictFutureWeather', ()=>{

  test('predictFutureWeather() should use the Present endpoint for the prediction', async ()=>{
    
    //Arrange
    const presentInputs:LocationAndDateTime = {
      latitude: -34.920345,
      longitude: -57.969559,
      date: '2024-04-30',
      time: '15:00:30'
    }
    
    //Act
    const forecastResult:any = await predictFutureWeather(presentInputs);
    
    
    //Assert
    expect( forecastResult ).toEqual( expect.objectContaining({
      temperature: expect.any(Number),
      humidity: expect.any(Number),
      windSpeed: expect.anything(),
      precipitation: expect.any(Number),
      cloudCover: expect.any(Number),
    }));

    PrintForecast(forecastResult);

  }, 5000);

  test('predictFutureWeather() should use the History endpoint for the prediction', async ()=>{
    
    //Arrange
    const pastInputs:LocationAndDateTime = {
      latitude: 37.733795,
      longitude: -122.446747,
      date: '2024-03-01',
      time: '08:10:10'
    }
    
    //Act
    const forecastResult:any = await predictFutureWeather(pastInputs);
    
    
    //Assert
    expect( forecastResult ).toEqual( expect.objectContaining({
      temperature: expect.any(Number),
      humidity: expect.any(Number),
      windSpeed: expect.anything(),
      precipitation: expect.any(Number),
      cloudCover: expect.any(Number),
    }));

    PrintForecast(forecastResult);

  }, 5000);
  
  test('predictFutureWeather() should use the Future endpoint for the prediction', async ()=>{
    
    //Arrange
    const futureInputs:LocationAndDateTime = {
      latitude: 35.652832,
      longitude: 139.839478,
      date: '2024-06-01',
      time: '12:30:10'
    }
    
    //Act
    const forecastResult:any = await predictFutureWeather(futureInputs);
    
    
    //Assert
    expect( forecastResult ).toEqual( expect.objectContaining({
      temperature: expect.any(Number),
      humidity: expect.any(Number),
      windSpeed: expect.anything(),
      precipitation: expect.any(Number),
      cloudCover: expect.any(Number),
    }));

    PrintForecast(forecastResult);

  }, 5000);

});