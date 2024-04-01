/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>'],
  maxWorkers: 2,
  clearMocks: true,
  resetModules: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  testMatch: [`${__dirname}/**/__tests__/**/?(*.)(spec).(js|ts)?(x)`],
  coveragePathIgnorePatterns: [
    'node_modules',
    '/dist/',
    '/__tests__/',
    '<rootDir>/src/relay',
    '<rootDir>/src/pages/demo',
    '<rootDir>/codegen',
    'types.ts',
    'MockDataProvider',
    'index.tsx',
    'MockData.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.[t|j]s?(x)?$': ['babel-jest', { configFile: './babel-test.config.json' }],
    '\\.(png|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!(@atlaskit|@atlassiansox)/)'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': 'css-loader',
    '^~src/(.*)$': '<rootDir>/src/$1',
    '^~mocks/(.*)$': '<rootDir>/mocks/$1',
    '^~codegen/(.*)$': '<rootDir>/codegen/$1',
    // needed to use @atlassiansox/analytics-web-client in testing
    '^type$': 'component-type',
    '~src/(.*)': '<rootDir>/src/$1',
    '~mocks/(.*)': '<rootDir>/mocks/$1',
    '~codegen/(.*)': '<rootDir>/codegen/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // add this line
  // Moved to nyc coverage configuration in package.json
  coverageThreshold: {
    global: {
      // branches: 72,
      // functions: 70,
      // lines: 90,
      // statements: 90,
    },
  },
  globalSetup: './jest.global-setup.js',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'target/test-reports',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
        ancestorSeparator: ' ⤑ ',
      },
    ],
  ],
};
