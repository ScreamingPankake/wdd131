
const footer = document.getElementById("footer");
const currentYear = new Date().getFullYear();
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();


footer.innerHTML = `©${currentYear} | Nathan Atwood | Last Modified: ${month}/${day}/${year}`;