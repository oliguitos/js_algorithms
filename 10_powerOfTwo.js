// Saber se um numero eh potencia de 2 com operadores bitwise

function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
console.log(powerOfTwo(2));
console.log(powerOfTwo(10));

function noBitWise(n) {
  if (n < 1) {
  }
  while (n > 1) {s
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
