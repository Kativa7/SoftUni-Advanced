function pie(arr, stringOne, stringTwo) {
    let startIndex = arr.indexOf(stringOne);
    let lastIndex = arr.indexOf(stringTwo);
    let result = arr.slice(startIndex, lastIndex + 1);
    return result;
}
pie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)