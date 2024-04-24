import { Forecast } from './futureForecastInterface';

export type UnixTimestamp = number;
export type Celsius = number;
export type Percentage = number;
export type MetersPerSeconds = number|string;
export type Millimeters = number;

export type LocationAndDateTime = {
  latitude:number, 
  longitude:number, 
  date:string, 
  time:string
}

export type ForecastInput = {
  location:string, 
  unixTimestamp: UnixTimestamp
}

export type WeatherAPIVars = {
  BaseUrl: string,
  ApiKey: string,
}

export type possibleEndpoints = 'past' | 'present' | 'future';

export type WeatherForecast = {
  temperature: Celsius,
  humidity: Percentage,
  windSpeed: MetersPerSeconds, 
  precipitation: Millimeters,
  cloudCover: Percentage,
  locationName?: string,
  locationRegion?: string,
  locationCountry?: string,
  hour?: string,
  date?: any,
}

export type IncomingForecast = {
  location: any,
  current?: any,
  forecast: Forecast
}

export type Forecast = {
  forecastday: Forecastday[]
}

export type Forecastday = {
    date:       Date;
    date_epoch: number;
    day:        Day;
    astro:      any;
    hour:       Hour[];
}

export type Day = {
    maxtemp_c:            number;
    mintemp_c:            number;
    avgtemp_c:            number;
    maxwind_kph:          number;
    totalprecip_mm:       number;
    totalsnow_cm:         number;
    avgvis_km:            number;
    avgvis_miles:         number;
    avghumidity:          number;
    daily_will_it_rain:   number;
    daily_chance_of_rain: number;
    daily_will_it_snow:   number;
    daily_chance_of_snow: number;
    condition:            Condition;
    uv:                   number;
}

export type Condition = {
    text: string;
    icon: string;
    code: number;
}

export type Hour = {
    time_epoch:     number;
    time:           string;
    temp_c:         number;
    is_day:         number;
    condition:      Condition;
    wind_kph:       number;
    wind_degree:    number;
    wind_dir:       string;
    pressure_mb:    number;
    precip_mm:      number;
    snow_cm:        number;
    humidity:       number;
    cloud:          number;
    feelslike_c:    number;
    windchill_c:    number;
    heatindex_c:    number;
    dewpoint_c:     number;
    will_it_rain:   number;
    chance_of_rain: number;
    will_it_snow:   number;
    chance_of_snow: number;
    vis_km:         number;
    vis_miles:      number;
    gust_kph:       number;
    uv:             number;
}