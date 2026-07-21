// Challenge 10: The Word Ladder

function wordLadder(startWord, endWord, dictionary) {
  const wordSet = new Set(dictionary);

  if (!wordSet.has(endWord)) return 0;

  const queue = [[startWord, 1]];
  const visited = new Set();
  visited.add(startWord);
  while (queue.length > 0) {
    const [word, level] = queue.shift();
    if (word === endWord) return level;
    for (let i = 0; i < word.length; i++) {
      const originalChar = word[i];
      for (let c = 97; c <= 122; c++) {
        const newChar = String.fromCharCode(c);
        if (newChar === originalChar) continue;
        const nextWord = word.slice(0, i) + newChar + word.slice(i + 1);
        if (wordSet.has(nextWord) && !visited.has(nextWord)) {
          visited.add(nextWord);
          queue.push([nextWord, level + 1]);
        }
      }
    }
  }
  return 0;
}



module.exports = wordLadder;