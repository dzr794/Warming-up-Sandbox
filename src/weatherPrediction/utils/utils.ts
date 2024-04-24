
// Utils

import { LocationAndDateTime, UnixTimestamp, WeatherForecast, possibleEndpoints } from "../types/forecastTypes";

export const PrintForecast = ( forecastResult:WeatherForecast ) => {
  console.log( `Forecast results: 
  - Location: "${forecastResult.locationName}  (${forecastResult.locationRegion}, ${forecastResult.locationCountry})"
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

export const detectEnpoint = (unixTimestamp:number): possibleEndpoints => {
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