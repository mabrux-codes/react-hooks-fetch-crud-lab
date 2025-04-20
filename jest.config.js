// filepath: /home/khalid-mabrux/documents/moringa-ft-13/phase-2/react-hooks-fetch-crud-lab/jest.config.js
module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@adobe/css-tools)", // Allow Jest to transform @adobe/css-tools
  ],
};