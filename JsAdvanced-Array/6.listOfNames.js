function listOfNames(array) {
    let sorted = array.sort((a,b) =>a.localeCompare(b))
    for (let i = 1; i <= sorted.length; i++) {
     console.log(`${i}.${sorted[i-1]}`);
        
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"])