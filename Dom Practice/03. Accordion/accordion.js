function toggle() {
  let btn = document.querySelector('span.button');
  let text = document.getElementById("extra");
  if (btn.textContent == "More") {
    text.style.display = "block";
    btn.textContent = "Less";
  } else {
    btn.textContent = "More";
    text.style.display = "none";
  }
}

// function toggle() {
//     let button = document.querySelector(`span.button`);
//     let divHiden = document.getElementById(`extra`);
//     if (button.textContent == `More`) {
//         divHiden.style.display = `block`;
//         button.textContent = `Less`;
//     } else if (button.textContent == `Less`) {
//         divHiden.style.display = `none`;
//         button.textContent = `More`;
//     }
// }