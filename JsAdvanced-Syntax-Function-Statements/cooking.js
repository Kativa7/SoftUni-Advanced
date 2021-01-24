function cooking(...input) {
    let num = Number(input.shift());
    let operations = {
        'chop': (x) => x / 2,
        'dice': (x) => Math.sqrt(x),
        'spice': (x) => x + 1,
        'bake': (x) => x * 3,
        'fillet': (x) => x * 0.80,
    }
    input.forEach(operation => {
        let result = operations[operation](num);
        num = result;
        console.log(result);
    });
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')



//•	chop - divide the number by two
//•	dice - square root of number
//•	spice - add 1 to number
//•	bake - multiply number by 3
//•	fillet - subtract 20% from number
