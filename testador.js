function isPowerOfTwo(n) {
  if (n < 1) return false;
  let verificador = 0;

  while (n > 1) {
    if (n % 2 != 0) {
      return false;
    }
    n = n / 2;
  }
return true;
}

console.log(isPowerOfTwo(3));
s