// Dado um numero N encontre os primeiros N elementos da sequencia de fibonacci

function fibo(n) {
  let fib = [0, 1];

  if (n < 2) return fib;

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }s
  return fib;
}

console.log(fibo(2)); // [0, 1]
console.log(fibo(3)); // [0, 1, 1]
console.log(fibo(7));

