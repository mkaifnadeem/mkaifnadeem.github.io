const dropdownButton = document.querySelector("#dropdown-button")
const dropdownList = document.querySelector(".nav-link-container")

function toggle() {
    dropdownList.classList.toggle('hidden')
}

dropdownButton.addEventListener('click',toggle)