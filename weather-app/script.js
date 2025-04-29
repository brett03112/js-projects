// API credentials and endpoint URL
const apiKey = "YOUR_API_KEY"; // Replace with your WeatherAPI.com API key
const apiUrl = "http://api.weatherapi.com/v1/current.json";

// DOM element selectors for user interaction
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

/**
 * Fetches and displays weather data for the specified city
 * @param {string} city - The name of the city to get weather for
 */
async function checkWeather(city) {
    // Make API request with city name and API key
    const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}`);

    // Handle city not found (404 error)
    if (response.status == 404) {
        // Show error message and hide weather display
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        // Parse JSON response data
        var data = await response.json();

        // Update UI with weather information
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_f) + "°F";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.current.wind_mph) + " mph";

        // Map WeatherAPI.com condition codes to our image files
        const condition = data.current.condition.text.toLowerCase();

        // Set appropriate weather icon based on condition
        if (condition.includes("cloud")) {
            weatherIcon.src = "images/clouds.png";
        }
        else if (condition.includes("clear") || condition.includes("sunny")) {
            weatherIcon.src = "images/clear.png";
        }
        else if (condition.includes("rain")) {
            weatherIcon.src = "images/rain.png";
        }
        else if (condition.includes("drizzle")) {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (condition.includes("mist") || condition.includes("fog")) {
            weatherIcon.src = "images/mist.png";
        }
        else if (condition.includes("snow")) {
            weatherIcon.src = "images/snow.png";
        }

        // Show weather display and hide error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Event listener for search button click
searchBtn.addEventListener("click", () => {
    // Call checkWeather function with the city name from input field
    checkWeather(searchBox.value);
})
