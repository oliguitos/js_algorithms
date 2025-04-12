// Dado um array e um target, informe a posicao do target.

let arr1 = [5, 6, 39, 10, 4];
let arr2 = [4, 5, 11, 10, 4];

function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (n === arr[i]) {
      return arr.indexOf(n);
    }
  }
  return -1;
}

console.log(linearSearch(arr1, 10));
console.log(linearSearch(arr2, 10));
console.log(linearSearch(arr2, 4));
console.log(linearSearch(arr1, 21));


