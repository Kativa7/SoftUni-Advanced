function subsequence(arr) {
    let resultArr = [arr[0]];
    for (let i = 0; i < arr.length; i++) {
        let biggest = arr[i];
        let next = arr[i + 1];  
        if(next >= biggest){
            resultArr.push(next);
            biggest = next;
        }
        
    }
    return resultArr;
}

subsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )