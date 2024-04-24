import { detectEnpoint, kphToMps, validateInputs } from './utils/utils';
import { getHistoricalWeatherForecast } from './pastWeather';
import { getPresentWeatherForecast } from './presentWeather';
import { getFutureWeatherForecast } from './futureWeather';

import { 
          ForecastInput,
          LocationAndDateTime,
          UnixTimestamp,
          WeatherAPIVars,
          WeatherForecast, 
          possibleEndpoints,
          IncomingForecast
        } from "./types/forecastTypes";



export const predictFutureWeather = async ( inputs:LocationAndDateTime ): Promise<WeatherForecast|Error> => {
  
  try {
    const validInputs = validateInputs(inputs);
    
    if (!validInputs.areValid) throw new Error(validInputs.error);
  
    const location = `${validInputs.latitude},${validInputs.longitude}`;
    
    const endpoint = detectEnpoint(validInputs.unixTimestamp);
  
    const weatherAPIVars = {
      BaseUrl: 'http://api.weatherapi.com/v1',
      ApiKey: '749655c4b67340ebbca33816242304'
    }
  
     switch (endpoint) {
      case 'past':
            return await getHistoricalWeatherForecast( weatherAPIVars, {location, unixTimestamp: validInputs.unixTimestamp} );
        break;
  
      case 'present':
        return await getPresentWeatherForecast( weatherAPIVars, {location, unixTimestamp: validInputs.unixTimestamp} );
        break;
        
        case 'future':
        return await getFutureWeatherForecast( weatherAPIVars, {location, unixTimestamp: validInputs.unixTimestamp} );
        break;
    
      default:
        return await getPresentWeatherForecast( weatherAPIVars, {location, unixTimestamp: validInputs.unixTimestamp} );
        break;
    }
  } catch (error) {
    console.error("Error caught:", error);
  }

}

