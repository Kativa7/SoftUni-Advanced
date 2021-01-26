function matrix(input) {
    let sumRows = [];
    let sumColumns = [];
  

    for (const row of input) {
        let sum = row.reduce((r, acc) => r + acc, 0);
        sumRows.push(sum);
    }

    for (let i = 0; i < input.length; i++) {
        let sum = 0;
        for (let k = 0; k < input.length; k++) {
            sum += input[i][k];
        }
        sumColumns.push(sum);
    }

    for (let i = 0; i < sumColumns.length; i++) {
        if (sumColumns[i] !== sumRows[i] || sumColumns[0] !== sumRows[i]) {
            return false;
        } 
    }
    return true;
}

console.log(matrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));