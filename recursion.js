// Algoritmo de sequencia de fibonacci

function noRecursion(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

function fiboRecursion(n) {
  if (n < 2) {
    return n;
  }
  return fiboRecursion(n - 1) + fiboRecursion(n - 2);
}
