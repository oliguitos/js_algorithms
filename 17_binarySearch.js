function binarySearch(arr, target) {
  let baixo = 0;
  let alto = arr.length - 1;

  while (baixo <= alto) {
    const meio = Math.floor((baixo + alto) / 2); // Calcula o índice do meio
    const chute = arr[meio]; // Valor no índice do meio

    if (chute === target) {
      return meio; // Retorna o índice se o valor for encontrado
    }
    if (chute > target) {
      alto = meio - 1; // Ajusta o limite superior
    } else {
    }
      baixo = meio + 1; // Ajusta o limite inferior
  }

  return -1; // Retorna -1 se o valor não for encontrado
}

// Testes
console.log(binarySearch([1, 3, 5, 7, 9], 3)); // Deve retornar 1
console.log(binarySearch([1, 3, 5, 7, 9], -1)); // Deve retornar -1
console.log(binarySearch([1, 3, 5, 7, 9], 9)); // Deve retornar 4
console.log(binarySearch([], 3)); // Deve retornar -1