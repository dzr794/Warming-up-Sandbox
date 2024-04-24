import { ForecastInput, IncomingForecast, WeatherAPIVars, WeatherForecast } from "./types/forecastTypes";
import { kphToMps } from "./utils/utils";


export const getPresentWeatherForecast = async ( 
                                                  {BaseUrl, ApiKey}:WeatherAPIVars, 
                                                  {location, unixTimestamp }:ForecastInput 
                                                ) => {
                                                  
                                                  try {
    console.log('using the Present endpoint...');
  
    const forecastEndpoint = `${BaseUrl}/forecast.json?key=${ApiKey}&q=${location}&unixdt=${unixTimestamp}`;
    
    
    const date = new Date(unixTimestamp * 1000);
    let hour = date.getHours();
    const outputHour = date.toLocaleTimeString();
    let outputDate;
    // console.log({outputHour});
    
    // console.log({date});
    // console.log({hour});
  
    let dayForecast:any;
    let hourForecast:any;
    let json:IncomingForecast;
    
    const res = await fetch(forecastEndpoint);
    json = await res.json();
    
    dayForecast = json.forecast.forecastday[0].day;
    hourForecast = json.forecast.forecastday[0].hour[hour];
    outputDate = json.forecast.forecastday[0].date;

    // console.log({dayForecast});
    // console.log({hourForecast});

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
    
  } catch (error) {
    console.log(error);
  }
  
  
}
