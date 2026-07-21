//Challenge 3: The Longest Substring Without Repeating Characters
function longestSubstring(string) {
  let substring = string
    .split("")
    .filter((char, index, arr) => {
      return arr.indexOf(char) === index;
    })
    .join("");
  return [substring, substring.length];
}
module.exports = longestSubstring;
