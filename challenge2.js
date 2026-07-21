//## Challenge 2: The Anagram Grouper

function groupAnagrams(array) {
  let angerMaps = {};
  for (let word of array) {
    let sortedKey = word.split("").sort().join("");
    if (!angerMaps[sortedKey]) {
      angerMaps[sortedKey] = [];
    }
    angerMaps[sortedKey].push(word);
  }
  return Object.values(angerMaps);
}


module.exports = groupAnagrams;