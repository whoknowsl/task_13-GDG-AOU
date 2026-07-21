const longestSubstring = require("./challenge3");

test("long sub string", () => {
  expect(longestSubstring("abcabcbb")).toEqual(["abc", 3]);
});
