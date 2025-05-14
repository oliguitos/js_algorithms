function fatorialRecursive(n) {
  if (n === 0) {
    return 1;
  }
  return n * fatorialRecursive(n - 1);
}

console.log(fatorialRecursive(0)); // 1
console.log(fatorialRecursive(1)); // 1
console.log(fatorialRecursive(5)); // 120
s