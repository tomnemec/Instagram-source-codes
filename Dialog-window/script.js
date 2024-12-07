const button = document.getElementById("btn");
const dialog = document.getElementById("dialog");
let active = false;

button.addEventListener("click", () => {
  if (active) {
    dialog.classList.add("fade-out");
    dialog.classList.remove("fade-in");
    active = false;
  } else {
    dialog.classList.add("fade-in");
    dialog.classList.remove("fade-out");
    active = true;
  }
});
