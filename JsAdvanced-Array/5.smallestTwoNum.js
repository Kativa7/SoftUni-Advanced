function smallest (arr){
    let sorted = arr.sort((a,b) => a- b);
    sorted.length = 2;
    console.log(sorted.join(" "));
}
smallest([30, 15, 50, 5])