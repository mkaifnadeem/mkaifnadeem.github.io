const dropdownList = document.querySelector(".nav-link-container");
const dropdownButton = document.querySelector("#dropdown-button");

function toggle() {
  dropdownList.classList.toggle("hidden");
}

dropdownButton.addEventListener("click", toggle);
