module.exports = {
  testEnvironment: 'jsdom', // Simulates a browser environment for testing
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Transpiles JavaScript/TypeScript files using Babel
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Recognizes these file extensions
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional: Setup file for additional configurations
  moduleNameMapper: {
    '^test-utils/(.*)$': '<rootDir>/test-utils/$1', // Maps @/test-utils/ to <rootDir>/test-utils/
    '^test-utils$': '<rootDir>/test-utils', // Maps @/test-utils exactly
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/'],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
};
