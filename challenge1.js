//## Challenge 1: The Balanced Brackets Validator

function IsValid(string) {
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (bracketMap[char]) {
      const topElement = stack.length === 0 ? "#" : stack.pop();

      if (bracketMap[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

module.exports = IsValid;