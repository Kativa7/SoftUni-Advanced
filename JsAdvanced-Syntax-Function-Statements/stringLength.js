function stringLength(argOne,argTwo,argThree) {
    let totalLength = argOne.length + argTwo.length + argThree.length;
    let avarege = Math.floor(totalLength / 3);
    console.log(totalLength);
    console.log(avarege);
}
stringLength('chocolate', 'ice cream', 'cake')