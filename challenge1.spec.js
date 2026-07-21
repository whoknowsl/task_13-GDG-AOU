const IsValid = require("./challenge1");

test("{[()]} is true", () => {
  expect(IsValid("{[()]}")).toBe(true);
});
