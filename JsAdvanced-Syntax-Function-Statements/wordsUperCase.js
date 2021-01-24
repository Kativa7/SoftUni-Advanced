function word(string) {
    let pattern = /[\w]+/g;
    let match = string.match(pattern);
    let result = []
    match.forEach(element => {
        element = element.toUpperCase();
        result.push(element)
    });
    console.log(result.join(", "));
}
word('Hi, how are you?')