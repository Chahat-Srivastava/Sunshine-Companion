const apiKey = 'cff9adc1b9f83485b3d8e45ea80c89e9';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
/*
function searchLocation() {
    const location = document.getElementById("location-input").value;
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=<span class="math-inline">\{location\}&appid\=</span>{apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.lat && data.lon) {
          const latitude = data.lat;
          const longitude = data.lon;
          // Use latitude and longitude to fetch weather data
          fetchWeatherByCoordinates(latitude, longitude);
        } else {
          alert("Location not found");
        }
      })
      .catch((error) => {
        console.error("Error searching location:", error);
        alert("Failed to search location. Please check your internet connection.");
      });
  }
  function fetchWeatherByCoordinates(latitude, longitude) {
      
    // ... (rest of the code to process weather data)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Check for successful response before accessing properties
      if (data && data.main && data.weather) {
        const cityName = data.name;
        const temp = Math.round(data.main.temp - 273.15) + "°C";
        const description = data.weather[0].description;

        // Display weather information in the weather-info element
        weatherInfo.querySelector(".city-name").textContent = cityName;
        weatherInfo.querySelector(".temp").textContent = temp;
        weatherInfo.querySelector(".description").textContent = description;

        // Clear the location input field
        locationInput.value = "";
      } else {
        console.error("API response did not contain expected data");
        // Handle the situation where the response is incomplete or invalid
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please check your location and internet connection.");
    });
}

  locationInput.value = "";
/*
const locationInput = document.getElementById("location-input");
const weatherInfo = document.querySelector(".weather-info");

function searchLocation() {
  const location = locationInput.value;
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.lat && data.lon) {
        const latitude = data.lat;
        const longitude = data.lon;
        fetchWeatherByCoordinates(latitude, longitude);
        fetch5DayForecast(latitude, longitude);
      } else {
        alert("Location not found");
      }
    })
    .catch((error) => {
      console.error("Error searching location:", error);
      alert("Failed to search location. Please check your internet connection.");
    });
}

function fetchWeatherByCoordinates(latitude, longitude) {
  const apiKey = 'cff9adc1b9f83485b3d8e45ea80c89e9'; // Replace with your OpenWeatherMap API key

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.main && data.weather) {
        displayWeatherInfo(data);
      } else {
        console.error("API response did not contain expected data");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please check your location and internet connection.");
    });
}

function displayWeatherInfo(data) {
    // Existing code for searchLocation and fetchWeatherByCoordinates

    const cityName = data.name;
    const temp = Math.round(data.main.temp - 273.15) + "°C";
    const description = data.weather[0].description;
    const feelsLike = Math.round(data.main.feels_like - 273.15) + "°C";
    const humidity = data.main.humidity + "%";
    const windSpeed = data.wind.speed + " m/s";
  
    weatherInfo.querySelector(".city-name").textContent = cityName;
    weatherInfo.querySelector(".temp").textContent = temp;
    weatherInfo.querySelector(".description").textContent = description;
    weatherInfo.querySelector(".feels-like").textContent = `Feels like: ${feelsLike}`;
    weatherInfo.querySelector(".humidity").textContent = `Humidity: ${humidity}`;
    weatherInfo.querySelector(".wind-speed").textContent = `Wind speed: ${windSpeed}`;
  
  
  // ... (code to display current weather information)
}

function fetch5DayForecast(latitude, longitude) {
    const apiKey = 'cff9adc1b9f83485b3d8e45ea80c89e9'; // Replace with your OpenWeatherMap API key

  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const forecastList = document.querySelector(".forecast-list");
      forecastList.innerHTML = ""; // Clear previous forecast data

      data.list.slice(0, 5).forEach((dayData) => {
        const day = new Date(dayData.dt * 1000).toLocaleDateString("en-US", { weekday: "long", day: "numeric" });
        const temp = Math.round(dayData.main.temp - 273.15) + "°C";
        const description = dayData.weather[0].description;

        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");
        forecastItem.textContent = `${day}: ${temp} - ${description}`;
        forecastList.appendChild(forecastItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching forecast:", error);
      alert("Failed to fetch forecast. Please check your location and internet connection.");
    });
  // ... (code to fetch and display 5-day forecast)
}
*/
  
