/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default  {
  preset: 'ts-jest',
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/style.ts',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/file.ts',
  },
   // to obtain access to the matchers.
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  testRegex: '.*\\.test\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
};
