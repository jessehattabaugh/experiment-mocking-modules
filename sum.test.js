jest.mock("./config.js");

const sum = require("./sum");
let config = require("./config");

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
  jest.restoreAllMocks();
});

test("without a mock", () => {
  config = jest.requireActual("./config");
  expect(sum(1, 2)).toBe(85);
});

test("with a mock of 1", () => {
  config.FOO.BAR = 1;
  expect(sum(1, 2)).toBe(3);
});

test("with a different mock", () => {
  config.FOO.BAR = 6;
  expect(sum(1, 2)).toBe(18);
});
