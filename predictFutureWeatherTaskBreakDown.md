# predictFutureWeather()

## Inputs

- Latitude: float range(-90 to 90)
- Longitude: float range(-180 to 180)
- Date: string ("YYYY-MM-DD")
- Time: string ("HH:MM:SS")

## Output (Object)

- Temperature (in Celsius)
- Humidity (in percentage)
- WindSpeed (in meters per second) (convert from mph)
- Precipitation (in millimeters)
- CloudCover (in percentage)

## The API

### Weatherapi - https://www.weatherapi.com/

#### APIKey

749655c4b67340ebbca33816242304

#### Plan restictions

##### FREE PLAN

- Forecast Days:        3 days Forecast
- Future Weather:       N/A
- Historical Weather:   7 days in the past
- Forecast Interval:    Daily and Hourly
- Uptime:               95.5%

##### PRO+ (TRIAL Ends on 07/May/2024)

- Forecast Days:        14 days Forecast
- Future Weather:       from 14 to 300 days ahead
- Historical Weather:   Last 365 days
- Forecast Interval:    Daily and Hourly
- Uptime:               99%
- Hourly predictions only come on 1 hour interval.

## Anytime functionality

The API uses 3 different endpoint for Future, Historical and Near date Forecast
Depending on input Date and time the function must call a different API endpoint to get the correct weather conditions of the desired date and time.

### History API (Last 365 days)

History weather API method returns, depending upon your subscription plan level, historical weather for a date on or after 1st Jan, 2010 as json and xml. The data is returned as a Forecast Object.

**API endpoint:** `http://api.weatherapi.com/v1/history.json`

### Forecast API (from today to 14 days ahead)

Forecast weather API method returns, depending upon your price plan level, upto next 14 day weather forecast and weather alert as json or xml. The data is returned as a Forecast Object.

**API endpoint:** `http://api.weatherapi.com/v1/forecast.json`

### Future Weather API (from 14 days ahead to 300 days ahead)

Future weather API method returns weather in a 3 hourly interval in future for a date between 14 days and 300 days from today in the future.

**API endpoint:** `http://api.weatherapi.com/v1/future.json`

## Needed functions

### convertDateTimeToUnix()

I need this function because the API must receive a unix Timestamp in order to get the weather for a specific time.

```Js
const convertDateTimeToUnix = (dateString, timeString) => {

  // Combine date and time strings into a single string
  const dateTimeString = `${dateString}T${timeString}`;

  // Create a JS Date object from the combined string
  const dateObject = new Date(dateTimeString);

  // Get the Unix timestamp in milliseconds (since JavaScript timestamps are in milliseconds)
  const milliseconds = dateObject.getTime();

  // Convert milliseconds to seconds (Unix timestamp format)
  const unixTimestamp = Math.floor(milliseconds / 1000);

  return unixTimestamp;
}

// Example usage
const dateString = "2024-04-22"; // YYYY-MM-DD
const timeString = "10:00:00"; // HH:MM:SS

const unixTimestamp = convertDateTimeToUnix(dateString, timeString);
```

### kphToMps()

I need this function to converts wind speed from kilometers per hour (kph) to meters per second (mps).

```Js
const kphToMps = (unitInKph) => {

  // Conversion factor: 1 kilometer per hour = 5/18 meters per second
  const conversionFactor = 5 / 18;
  const windSpeedMps = unitInKph * conversionFactor;

  return windSpeedMps;
}

// Example usage
const windSpeedKph = 20; // Sample wind speed in kph
const windSpeedMps = convertWindSpeed(windSpeedKph);
```
