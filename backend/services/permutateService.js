// const letters = ['A', 'B', 'C', 'D'];
// const permutations = [];
//generatePermutations(letters, 0, permutations);

export function generatePermutations(arr, start, result) {
    if (start === arr.length - 1) {
        result.push([...arr]); // Copia el arreglo actual como una permutación
        return;
    }
    
    for (let i = start; i < arr.length; i++) {
        swap(arr, start, i);
        generatePermutations(arr, start + 1, result);
        swap(arr, start, i); // Restaura el arreglo para probar otras permutaciones
    }
    return result
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


//console.log(permutations);