// Dado um numero inteiro, encontre o fatorial desse numero.

function fatorial(n) {
  let produto = 1;

  if(n == 0 || n == 1) return 1;

  for (let i = 2; i <= n; i++) {
    produto *= i;
  }

  return produto;
}
s
console.log(fatorial(4))
console.log(fatorial(5))
