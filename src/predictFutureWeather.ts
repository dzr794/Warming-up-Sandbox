
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
    
    const endpoint = getEndpoint(validInputs.unixTimestamp);
  
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


export const getPresentWeatherForecast = async ( 
                                                  {BaseUrl, ApiKey}:WeatherAPIVars, 
                                                  {location, unixTimestamp }:ForecastInput 
                                                ): Promise<WeatherForecast|Error> => {
  console.log('using the Present endpoint...');

  const forecastEndpoint = `${BaseUrl}/forecast.json?key=${ApiKey}&q=${location}&unixdt=${unixTimestamp}`;
  
  
  let date = new Date(unixTimestamp * 1000);
  let hour = date.getHours();
  const outputHour = date.toLocaleTimeString();

  // console.log({outputHour});
  
  // console.log({date});
  // console.log({hour});

  let dayForecast:any;
  let hourForecast:any;
  let json:IncomingForecast;

  try {
    
    const res = await fetch(forecastEndpoint);
    json = await res.json();
    
    dayForecast = json.forecast.forecastday[0].day;
    hourForecast = json.forecast.forecastday[0].hour[hour];

    
  } catch (error) {
    console.log(error);
  }
  
  // console.log({dayForecast});
  // console.log({hourForecast});
  const outputDate = json.forecast.forecastday[0].date;

  const temperature_Celsius       = hourForecast.temp_c;
  const humidity_percentage       = hourForecast.humidity;
  const windSpeed_mph             = kphToMps(hourForecast.wind_kph);
  const precipitation_millimeters = hourForecast.precip_mm;
  const cloudCover_percentage     = hourForecast.cloud;

  // just a temporary Mock
  const weatherForecast:WeatherForecast = {
    temperature: temperature_Celsius,
    humidity: humidity_percentage,
    windSpeed: windSpeed_mph,
    precipitation: precipitation_millimeters,
    cloudCover: cloudCover_percentage,
    locationName: json.location.name,
    locationRegion: json.location.region,
    locationCountry: json.location.country,
    hour: outputHour,
    date: outputDate
  };

  return weatherForecast;
}

export const getHistoricalWeatherForecast = async ( 
                                                    {BaseUrl, ApiKey}:WeatherAPIVars, 
                                                    {location, unixTimestamp }:ForecastInput 
                                                  ): Promise<WeatherForecast|Error> => {


  console.log('using the Historical endpoint...');

  const forecastEndpoint = `${BaseUrl}/history.json?key=${ApiKey}&q=${location}&unixdt=${unixTimestamp}`;


  let date = new Date(unixTimestamp * 1000);
  let hour = date.getHours();
  const outputHour = date.toLocaleTimeString();

  // console.log({outputHour});
  
  // console.log({date});
  // console.log({hour});

  let dayForecast:any;
  let hourForecast:any;
  let json:IncomingForecast;

  try {
    
    const res = await fetch(forecastEndpoint);
    json = await res.json();
    
    dayForecast = json.forecast.forecastday[0].day;
    hourForecast = json.forecast.forecastday[0].hour[hour];

    
  } catch (error) {
    console.log(error);
  }
  
  // console.log({dayForecast});
  // console.log({hourForecast});
  const outputDate = json.forecast.forecastday[0].date;

  const temperature_Celsius       = hourForecast.temp_c;
  const humidity_percentage       = hourForecast.humidity;
  const windSpeed_mph             = kphToMps(hourForecast.wind_kph);
  const precipitation_millimeters = hourForecast.precip_mm;
  const cloudCover_percentage     = hourForecast.cloud;

  // just a temporary Mock
  const weatherForecast:WeatherForecast = {
    temperature: temperature_Celsius,
    humidity: humidity_percentage,
    windSpeed: windSpeed_mph,
    precipitation: precipitation_millimeters,
    cloudCover: cloudCover_percentage,
    locationName: json.location.name,
    locationRegion: json.location.region,
    locationCountry: json.location.country,
    hour: outputHour,
    date: outputDate
  };

  return weatherForecast;
}

export const getFutureWeatherForecast = async ( 
                                                {BaseUrl, ApiKey}:WeatherAPIVars, 
                                                {location, unixTimestamp }:ForecastInput 
                                              ): Promise<WeatherForecast|Error> => {
  console.log('using the Future endpoint...');
  
  const forecastEndpoint = `${BaseUrl}/future.json?key=${ApiKey}&q=${location}&unixdt=${unixTimestamp}`;

  

  let date = new Date(unixTimestamp * 1000);
  let hour = date.getHours();
  const outputHour = date.toLocaleTimeString();

  // console.log({outputHour});
  
  // console.log({date});
  // console.log({hour});

  let dayForecast:any;
  let hourForecast:any;
  let json:IncomingForecast;

  try {
    
    const res = await fetch(forecastEndpoint);
    json = await res.json();
    
    dayForecast = json.forecast.forecastday[0].day;
    hourForecast = json.forecast.forecastday[0].hour[hour];

    
  } catch (error) {
    console.log(error);
  }
  
  // console.log({dayForecast});
  // console.log({hourForecast});
  const outputDate = json.forecast.forecastday[0].date;

  const temperature_Celsius       = hourForecast.temp_c;
  const humidity_percentage       = hourForecast.humidity;
  const windSpeed_mph             = kphToMps(hourForecast.wind_kph);
  const precipitation_millimeters = hourForecast.precip_mm;
  const cloudCover_percentage     = hourForecast.cloud;

  // just a temporary Mock
  const weatherForecast:WeatherForecast = {
    temperature: temperature_Celsius,
    humidity: humidity_percentage,
    windSpeed: windSpeed_mph,
    precipitation: precipitation_millimeters,
    cloudCover: cloudCover_percentage,
    locationName: json.location.name,
    locationRegion: json.location.region,
    locationCountry: json.location.country,
    hour: outputHour,
    date: outputDate
  };

  return weatherForecast;
}


// Utils

export const PrintForecast = ( forecastResult:WeatherForecast ) => {
  console.log( `Forecast results: 
  - Location: "${forecastResult.locationName}  (${forecastResult.locationRegion},${forecastResult.locationCountry})"
  - Date: ${forecastResult.date}
  - Aproximate time: ${forecastResult.hour}
  - Temperature = ${forecastResult.temperature }C 
  - Humidity = ${forecastResult.humidity}%
  - WindSpeed = ${forecastResult.windSpeed} mps
  - Precipitation = ${forecastResult.precipitation} mm
  - CloudCover = ${forecastResult.cloudCover}%` );
}

const isValidLatitude = (latitude:number) => {
  return isInAbsoluteRange(latitude, 90);
}

const isValidLongitude = (longitude:number) => {
  return isInAbsoluteRange(longitude, 180);
}

const isInAbsoluteRange = ( value:number, minMax:number ) => {
  return typeof value === 'number' && Math.abs(value) <= minMax;
}

export const validateInputs = ({latitude, longitude, date, time}:LocationAndDateTime) : {areValid: boolean, error?:string, latitude?, longitude?, unixTimestamp?} => {
  const unixTimestamp = convertDateTimeToUnix(date, time);
  
  if (!unixTimestamp.isValid) 
    return {areValid: false, error: unixTimestamp.error};

  if (!isValidLatitude(latitude)) 
    return {areValid: false, error: 'The Latitude must be a number between -90 and 90'};

  if (!isValidLongitude(longitude)) 
    return {areValid: false, error: 'The Longitude must be a number between -180 and 180'};

  return {areValid: true, latitude, longitude, unixTimestamp: unixTimestamp.unix };
}
 
export const kphToMps = ( kph:number ) => {

  // Conversion factor: 1 kilometer per hour = 5/18 meters per second
  const conversionFactor = 5 / 18;
  const mps =  kph * conversionFactor;

  return (mps.toFixed(2)).toString();
}

export const convertDateTimeToUnix = ( dateString:string, timeString:string ):{isValid:boolean, unix?:UnixTimestamp, error?:string} => {

  // Combine date and time strings into a single string
  const dateTimeString: string = `${dateString}T${timeString}`;
  
  let dateObject: Date;

  dateObject = new Date(dateTimeString);
  
  if ( Number.isNaN( dateObject.getHours() )) 
    return {isValid: false, error:`Invalid date string: ${dateTimeString}`}
  

  // Get the Unix timestamp in milliseconds (since JavaScript timestamps are in milliseconds)
  const milliseconds:number = dateObject.getTime();
    // CATCH ERROR

  // Convert milliseconds to seconds (Unix timestamp format)
  const unixTimestamp:number = Math.floor(milliseconds / 1000);
  

  return {isValid: true, unix:unixTimestamp};
}

export const getEndpoint = (unixTimestamp:number|undefined): possibleEndpoints => {
  const currentTime = new Date().getTime() / 1000;
  const timeDiff = Math.abs(currentTime - unixTimestamp);
  const daysDiff = Math.floor(timeDiff / (60 * 60 * 24)); // convert seconds to days
  const isPast = (unixTimestamp < currentTime)?true:false;
  
  if (isPast && daysDiff <= 365) 
    return 'past';

  if (daysDiff > 14 && daysDiff <= 300) 
    return 'future';

  return 'present'; // Exact match (same timestamp)

 
}