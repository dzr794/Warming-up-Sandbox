/**
 * For a detailed explanation regarding each configuration property, visit:
 * http */

import type {Config} from 'jest';

const config: Config = {  
  clearMocks: true,
  testMatch: [ '<rootDir>/tests/weatherPrediction/predictFutureWeather.test.ts' ],
};

export default config;
