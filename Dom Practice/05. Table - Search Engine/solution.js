function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let inputField = document.querySelector("#searchField");
    let tableRows = document.querySelectorAll(".container tbody tr");
    for (const row of tableRows) {
      if (
        row.textContent.toLowerCase().includes(inputField.value.toLowerCase())
      ) {
        row.setAttribute("class", "select");
      } else {
        row.removeAttribute("class");
      }
   }
   inputField.value = "";
  }
}
