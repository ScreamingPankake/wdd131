

const hamburger = document.getElementById("hamburger");
const navlink = document.getElementById("nav-links");
const headertext = document.getElementById("header-text");
var isX = false;

hamburger.addEventListener('click', function () {
    console.log("Button Clicked");
    toggleMenu();
});


function toggleMenu() {
    hamburger.innerHTML = "<button class='hamburger' id='hamburger'>X</button>";
    if (isX) {
        hamburger.innerHTML = "<button class='hamburger' id='hamburger'>&#9776;</button>";
        navlink.style.display = "none";
        headertext.style.display = "block";
        isX = false;
    }
    else {
        headertext.style.display = "none";
        navlink.style.display = "flex";
        navlink.style.flexDirection = "row";
        isX = true
    }
}

const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;