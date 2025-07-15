

const footer = document.getElementById("footer");
const temp = document.getElementById("temp");
const windSpeed = document.getElementById("wind-speed");
let windChill = document.getElementById("wind-chill");

const currentYear = new Date().getFullYear();
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

footer.innerHTML = `©${currentYear} | Nathan Atwood | Last Modified: ${month}/${day}/${year}`;
temp.innerHTML = `82°F`;
windSpeed.innerHTML = `3 mph`;
windChill = calculateWindChill();


function calculateWindChill(temp, windSpeed)
{
    if (windSpeed > 3 && temp <= 50)
    {
        windChill = 35.74 + (0.6215 * temp) - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16)
        return windChill;
    }
    else
    {
        windChill = 'N/A';
        return windChill
    }
}