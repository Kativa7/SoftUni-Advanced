function  biggerHalf(array) {
let resultArr = array.sort((a,b) => a - b);
let startIndex = (resultArr.length / 2)
resultArr = resultArr.slice(startIndex);

return resultArr;
}

biggerHalf([4, 7, 2, 5,])