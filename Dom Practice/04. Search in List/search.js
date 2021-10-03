function search() {
  let itemList = document.querySelectorAll("#towns li");
  let searchInput = document.querySelector("#searchText").value;
  let resultField = document.querySelector("#result");

  let count = 0;
  for (const item of itemList) {
    if (item.textContent.toLowerCase().includes(searchInput.toLowerCase())) {
      item.style.fontWeight = "bold";
      item.style.textDecoration = "underline";
      count++
    } else {
      item.style.fontWeight = "";
      item.style.textDecoration = "";
    }
  }
resultField.textContent = `${count} matches found`
}
