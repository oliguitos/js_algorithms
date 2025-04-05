// Encontre o eNesimo numero na sequencia de fibo.
function fiboRecursive(n) {
  if (n < 2) return n;

  return fiboRecursive(n - 1) + fiboRecursive(n - 2);
}

console.log(fiboRecursive(8));
