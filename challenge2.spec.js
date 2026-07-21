const { describe } = require("yargs");
const groupAnagrams = require("./challenge2");

test("gruptheangram", () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);
});
