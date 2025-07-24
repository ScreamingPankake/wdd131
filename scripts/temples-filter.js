
const footer = document.getElementById("footer");
const homeFilter = document.getElementById("home");
const newFilter = document.getElementById("new-filter");
const oldFilter = document.getElementById("old-filter");
const largeFilter = document.getElementById("large-filter");
const smallFilter = document.getElementById("small-filter");
const hamburger = document.getElementById("hamburger");
const navlink = document.getElementById("nav-links");
const headertext = document.getElementById("header-text");
var isX = false;

const currentYear = new Date().getFullYear();
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Melbourne Australia",
        location: "Melbourne, Australia",
        dedicated: "2000, June, 16",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-58608-main.jpg"
    },
    {
        templeName: "Salvador Brazil",
        location: "Salvador, Brazil",
        dedicated: "2024, October, 20",
        area: 29963,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668-main.jpg"
    },
    {
        templeName: "Spokane Washington",
        location: "Spokane, Washington, United States",
        dedicated: "1999, August, 21-23",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/spokane-washington-temple/spokane-washington-temple-30260-main.jpg"
    },
];


createTempleCard(temples);



hamburger.addEventListener('click', function () {
    console.log("Button Clicked");
    toggleMenu();
});

homeFilter.addEventListener('click', function () {
    let filteredTemples = temples
    createTempleCard(filteredTemples);
});

newFilter.addEventListener('click', function () {
    let filteredTemples = temples.filter(temple => temple.dedicated[0] == '2');
    createTempleCard(filteredTemples);
});

oldFilter.addEventListener('click', function () {
    let filteredTemples = temples.filter(temple => temple.dedicated[0] == '1');
    createTempleCard(filteredTemples);
});

largeFilter.addEventListener('click', function () {
    let filteredTemples = temples.filter(temple => temple.area > 90000)
    createTempleCard(filteredTemples);
});

smallFilter.addEventListener('click', function () {
    let filteredTemples = temples.filter(temple => temple.area < 10000)
    createTempleCard(filteredTemples);
});





function createTempleCard(filteredTemples) {

    const container = document.querySelector(".images");
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".images").appendChild(card);
    });
}

function toggleMenu() {
    if (isX) {
        hamburger.textContent = "☰";
        navlink.style.display = "none";
        headertext.style.display = "block";
        isX = false;
    } else {
        hamburger.textContent = "X";
        navlink.style.display = "flex";
        navlink.style.flexDirection = "row";
        headertext.style.display = "none";
        isX = true;
    }
}

footer.innerHTML = `©${currentYear} | Nathan Atwood | Last Modified: ${month}/${day}/${year}`;