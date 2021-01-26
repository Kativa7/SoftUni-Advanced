function negative(arr) {
    let result = [];
    for (const num of arr) {
        if (num < 0){
            result.unshift(num);
        }else{
            result.push(num)
        }
}
console.log(result.join("\n"))
}
negative([7, -2, 8, 9])