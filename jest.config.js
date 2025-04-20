module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTests.js"],

  transformIgnorePatterns: [
    "/node_modules/(?!(\\@adobe/css-tools)/)" // allow this module to be transformed
  ],
  moduleFileExtensions: ["js", "jsx"],
};
