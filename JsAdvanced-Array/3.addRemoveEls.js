function solve(input) {
    let num = 1;
    let arr = [];

    for (const command of input) {
        if (command === "add") {
            arr.push(num);
        } else {
            arr.pop(num);
        }
        num++;
    }
if(arr.length !== 0){
    console.log(arr.join("\n"));
}else{
    console.log("Empty");
}
}

solve(['add', 
'add', 
'add', 
'add']
)