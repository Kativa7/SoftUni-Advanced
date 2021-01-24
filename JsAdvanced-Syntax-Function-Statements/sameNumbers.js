function sameNums(number) {
    let str = number.toString();
    let sum = 0;
    for (const el of str) {
        sum += Number(el);
    }
    let isSame = true;
  for (let i = 0; i < str.length; i++) {
      let current = str[i]
      let next = str[i + 1]
      if(current === next && next !== undefined){
      isSame = true;
  }else if(current !== next && next !== undefined){
      isSame = false;
      break
  }

}
console.log(isSame);
console.log(sum);
}
sameNums(2233);