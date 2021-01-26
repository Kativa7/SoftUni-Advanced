function biggestEl(matrix) {
    let resultArray = [];
 for (let i = 0; i < matrix.length; i++) {
     resultArray = resultArray.concat(matrix[i])
 }

let max = Math.max(...resultArray);
console.log(max);
}

biggestEl([[20, 50, 10],
    [8, 33, 145]])