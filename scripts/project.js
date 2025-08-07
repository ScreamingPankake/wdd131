

const heroImage = document.getElementById("hero");
const hamburger = document.getElementById("hamburger");
const footer = document.getElementById("footer");
const navbar = document.querySelector(".navbar"); // fixed

var isX = false;

const currentYear = new Date().getFullYear();
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

hamburger.addEventListener('click', function () {
    console.log("Button Clicked");
    toggleMenu();
});

function toggleMenu() {
    if (window.innerWidth < 1000) {
        if (isX) {
            hamburger.textContent = "☰";
            navbar.style.display = "none";
            isX = false;
        } else {
            hamburger.textContent = "X";
            navbar.style.display = "flex";
            isX = true;
        }
    }
}

footer.innerHTML = `©${currentYear} | Nathan Atwood | Last Modified: ${month}/${day}/${year}`;