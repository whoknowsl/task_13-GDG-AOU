# task_13-GDG-AOU

# Task 13: JavaScript Problem Solving Challenges

---

## Challenge 1: The Balanced Brackets Validator

Write a function that checks whether a string containing `()`, `{}`, and `[]` has all brackets properly balanced and closed in the correct order.

**Example:**

```
isValid("{[()]}") → true
isValid("{[(])}") → false
```

---

## Challenge 2: The Anagram Grouper

Given an array of strings, group all the anagrams together into sub-arrays.

**Example:**

```
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
→ [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

---

## Challenge 3: The Longest Substring Without Repeating Characters

Find the length of the longest substring within a string that contains no repeated characters.

**Example:**

```
longestSubstring("abcabcbb") → 3 ("abc")
```

---

## Challenge 4: The Matrix Spiral Traversal

Given a 2D matrix, return all its elements in spiral order (clockwise, starting from the top-left corner).

**Example:**

```
spiralOrder([[1,2,3],[4,5,6],[7,8,9]]) → [1,2,3,6,9,8,7,4,5]
```

---

## Challenge 5: The Coin Change Problem

Given a set of coin denominations and a target amount, find the minimum number of coins needed to make that amount. Return -1 if it's impossible.

**Example:**

```
coinChange([1, 2, 5], 11) → 3 (5 + 5 + 1)
```

---

## Challenge 6: The Deep Object Flattener

Write a function that flattens a deeply nested object into a single-level object, where keys represent the path using dot notation.

**Example:**

```
flatten({ a: 1, b: { c: 2, d: { e: 3 } } })
→ { "a": 1, "b.c": 2, "b.d.e": 3 }
```

---

## Challenge 7: The Event Emitter (Build From Scratch)

Implement a simple event emitter class with `on`, `off`, and `emit` methods, without using any built-in Node.js EventEmitter.

**Example:**

```
const emitter = new EventEmitter();
emitter.on("greet", (name) => console.log(`Hello ${name}`));
emitter.emit("greet", "Ali"); // "Hello Ali"
```

---

## Challenge 8: The LRU Cache

Design and implement a Least Recently Used (LRU) cache with `get` and `put` operations, both running in O(1) time.

**Example:**

```
const cache = new LRUCache(2);
cache.put(1, "A");
cache.put(2, "B");
cache.get(1);       // "A"
cache.put(3, "C");  // evicts key 2 (least recently used)
```

---

## Challenge 9: The Debounce Function

Implement a `debounce(fn, delay)` function from scratch that delays invoking `fn` until after `delay` milliseconds have passed since the last time it was called.

**Example:**

```
const log = debounce(() => console.log("Searching..."), 300);
input.addEventListener("keyup", log);
```

---

## Challenge 10: The Word Ladder

Given a start word, an end word, and a dictionary of valid words, find the length of the shortest transformation sequence, changing only one letter at a time, where each intermediate word must exist in the dictionary.

**Example:**

```
wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"]) → 5
("hit" → "hot" → "dot" → "dog" → "cog")
```

---
