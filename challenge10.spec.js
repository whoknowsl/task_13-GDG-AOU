const wordLadder = require("./challenge10");

test("should give me 5 word to get to the end of ldder", () => {
  expect(
    wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
  ).toBe(5);
});
