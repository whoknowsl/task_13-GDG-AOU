//Challenge 4: The Matrix Spiral Traversal

function spiralOrder(arr) {
  if (arr.length === 0) return [];

  const res = [];
  let top = 0,
    bottom = arr.length - 1;
  let left = 0,
    right = arr[0].length - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) res.push(arr[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) res.push(arr[i][right]);
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) res.push(arr[bottom][i]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) res.push(arr[i][left]);
      left++;
    }
  }
  return res;
}

module.exports = spiralOrder;