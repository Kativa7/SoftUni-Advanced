function printDelimitar(array, dell) {
    let result = []
for (const el of array) {
    result.push(el)
}
console.log(result.join(dell));
}
printDelimitar(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);