const sum = require("./sum.js");

const configMock = jest.mock("./config.js");

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
  jest.restoreAllMocks();
});

test("without a mock", () => {
  expect(sum(1, 2)).toBe(85);
});

test("with a mock of 1", () => {
  configMock.mockImplementation(() => ({ FOO: { BAR: 1 } }));
  expect(sum(1, 2)).toBe(3);
});

test("with a different mock", () => {
  configMock.mockImplementation(() => ({ FOO: { BAR: 6 } }));
  expect(sum(1, 2)).toBe(13);
});
