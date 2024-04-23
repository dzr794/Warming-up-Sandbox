/**
 * For a detailed explanation regarding each configuration property, visit:
 * http */

import type {Config} from 'jest';

const config: Config = {  
  clearMocks: true,
  testMatch: [ '<rootDir>/tests/predictFutureWeather.test.ts' ],
  testTimeout: 30000, // 30 seconds
};

export default config;
