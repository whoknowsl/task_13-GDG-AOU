const flatten = require("./challenge6");

test("flatten", () => {
  expect(flatten({ a: 1, b: { c: 2, d: { e: 3 } } })).toEqual({
    a: 1,
    "b.c": 2,
    "b.d.e": 3,
  });
});
