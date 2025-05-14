function binarySearch(arr, target) {
    let leftIndex = 0; // indice esquerdo
    let rightIndex = arr.lenght - 1; // indice direito ou final, tamanho do array, 5 por exemplo - 1 = 4 == 10.

    while (leftIndex <= rightIndex) { // enquanto indice esquerdo for menor ou igual que o indice final, faca
        let middleIndex = Math.floor(leftIndex + rightIndex / 2); // procurando o meio com arredondamento.

        if (target === arr[middleIndex]) { // se algo eh igual ao meio entao retorna o meio, que seria 4 se fosse V.
            return middleIndex;
        } else if (middleIndex < target) { // se nao, verifica se o meio eh menor ou maior que o alvo.
            rightIndex = middleIndex; // se for menor o meio vira o fim da arrayf
        }


    }


}


console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3 
console.log(binarySearch([-5, 2, 4, 6, 10], 20))// -1
s