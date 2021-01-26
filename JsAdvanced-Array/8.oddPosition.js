function oddPosition(array) {
    return array.filter((x, i) => i % 2 != 0).map(x => x * 2).reverse().join(" ");
}
console.log(oddPosition([10, 15, 20, 25]))