function gcd(numOne, numTwo) {

    while (numTwo !== 0) {
        let temp = numTwo;
        numTwo = numOne % numTwo
        numOne = temp
    }
    return numOne
}

console.log(gcd(15, 5));
console.log(gcd(2154, 458));