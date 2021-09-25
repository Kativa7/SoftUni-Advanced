function solve() {
  //TODO...
  let textArea = document.getElementById("text");
  let convention = document.getElementById("naming-convention");
  let resultArea = document.getElementById("result");

  if (convention.value == "Camel Case") {
    let result = textArea.value.toLowerCase();
    result = result.split(" ");
    for (let i = 0; i < result.length; i++) {
      if (i != 0) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
      }
    }
    resultArea.textContent = result.join("");
  } else if (convention.value == "Pascal Case") {
    let result = textArea.value.toLowerCase();
    result = result.split(" ");
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    resultArea.textContent = result.join("");
  } else {
    resultArea.textContent = "Error!";
  }
}
