const sum = require("./sum");

const config = require("./config.js");

test("without a mock", () => {
  expect(sum(1, 2)).toBe(85);
});

test("with a mock of 1", () => {
  jest.spyOn(config, "default").mockReturnValue({ FOO: { BAR: 1 } });
  expect(sum(1, 2)).toBe(3);
});

test("with a different mock", () => {
  jest.spyOn(config, "default").mockReturnValue({ FOO: { BAR: 6 } });
  expect(sum(1, 2)).toBe(18);
});
