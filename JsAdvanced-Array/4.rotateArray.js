function rotateArray(inputArr,rotationNum) {
   for (let i = 0; i < rotationNum; i++) {
     let element = inputArr.pop();
     inputArr.unshift(element);
   }
   console.log(inputArr.join(" "));
}
rotateArray(['1', 
'2', 
'3', 
'4'], 
2
)