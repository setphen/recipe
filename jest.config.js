module.exports = {
  rootDir: '.',
  roots: ['src'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  collectCoverageFrom: [
    'src/@(components|util|styles)/**/*.{ts,tsx}',
    '!src/@(components|util|styles)/**/index.{ts,tsx}',
    '!src/@(components|util|styles)/**/*types.{ts,tsx}',
    '!src/@(components|util|styles)/**/en.{ts,tsx}',
    '!**/node_modules/**',
  ],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/jest.fileTransformer.js',
    '^.+\\.md?$': 'jest-raw-loader',
    '^.+\\.zero.css?$': '<rootDir>/jest.cssTransformer.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)sx?$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  globals: {
    'ts-jest': {
      babelConfig: '<rootDir>/.babelrc',
    },
  },
};
