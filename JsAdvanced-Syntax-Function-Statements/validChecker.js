function valid(x1, y1, x2, y2) {
    function status(x1, y1, x2, y2) {
        let distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

        return Number.isInteger(distance) ? "valid" : "invalid";
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${status(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${status(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status(x1, y1, x2, y2)}`);
}
valid(2, 1, 1, 1)