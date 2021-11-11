const sum = require("./sum");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
  jest.restoreAllMocks();
});

test("without a mock", () => {
  expect(sum(1, 2)).toBe(85);
});

test("with a mock of 6", () => {
  jest.mock("./config.js", () => ({ FOO: { BAR: 6 } }));
  expect(sum(1, 2)).toBe(18);
});

test("with a different mock", () => {
  jest.mock("./config.js", () => ({ FOO: { BAR: 1 } }));
  expect(sum(1, 2)).toBe(3);
});
