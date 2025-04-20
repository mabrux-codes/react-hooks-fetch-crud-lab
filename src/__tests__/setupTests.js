// src/__tests__/setupTests.js
import { server } from '../mocks/server.js';

// Establish API mocking before all tests
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests, so they don't affect other tests
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());

// Dummy test to avoid "no tests found" error
test('dummy test', () => {
  expect(true).toBe(true);
});
