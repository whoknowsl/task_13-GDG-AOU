const coinChange = require("./challenge5");

test("coin change", () => {
  expect(coinChange([1, 2, 5], 11)).toBe(3);
});
