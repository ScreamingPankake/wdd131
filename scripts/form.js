
const footer = document.getElementById("footer");
const currentYear = new Date().getFullYear();
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

const formReview = document.getElementById("review-form");

const productSelect = document.getElementById("product-sel");

let reviewNum = 0;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name} (Rating: ${product.averagerating})`;
    productSelect.appendChild(option);
});

footer.innerHTML = `©${currentYear} | Nathan Atwood | Last Modified: ${month}/${day}/${year}`;

formReview.addEventListener("submit", function (event) {
    let count = parseInt(localStorage.getItem("reviewCount")) || 0;

    count++;

    localStorage.setItem("reviewCount", count);

    console.log(`form submitted ${count} times.`);
});
