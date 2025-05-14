// Dado um array e um target, informe a posicao do target.

let arra = [3, 5, 4, 10, 7];

function linearSearch(arr, alvo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === alvo) {
      return i
    } 
  }
  return 1;
}

console.log(linearSearch(arra, 10));
