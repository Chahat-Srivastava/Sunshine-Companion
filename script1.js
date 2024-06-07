/*const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.querySelector('.weather-info');

const apiKey = 'cff9adc1b9f83485b3d8e45ea80c89e9'; // Replace with your OpenWeatherMap API key

searchButton.addEventListener('click', getWeatherData);

function getWeatherData() {
    const city = cityInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Display current weather data
            const { name, main: { temp, description }, coord: { lon, lat } } = data;
            weatherInfo.querySelector('.location').textContent = `${name}, ${lat}, ${lon}`;
            weatherInfo.querySelector('.temperature').textContent = `Temperature: ${temp}°C`;
            weatherInfo.querySelector('.description').textContent = description;

            // Get and display 5-day forecast
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
            fetch(forecastUrl)
                .then(response => response.json())
                .then(forecastData => {
                    const forecastList = weatherInfo.querySelector('.forecast-list');
                    forecastList.innerHTML = '';
                    forecastData.list.slice(0, 5).forEach(day => {
                        const li = document.createElement('li');
                        li.textContent = `${day.dt_txt} - ${day.main.temp_min}°C / ${day.main.temp_max}°C - ${day.weather[0].description}`;
                        forecastList.appendChild(li);
                    });
                });
        })
        .catch(error => console.error(error));
}*/
/*
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.querySelector('.weather-info');
const alertsContainer = document.querySelector('.alerts-container'); // Add element to display alerts

const apiKey = 'cff9adc1b9f83485b3d8e45ea80c89e9'; // Replace with your OpenWeatherMap API key

searchButton.addEventListener('click', getWeatherData);

function getWeatherData() {
  const city = cityInput.value;

  // Fetch current weather and alerts
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      // Display current weather data (your existing code)

      // Display current weather data
      const { name, main: { temp, description }, coord: { lon, lat } } = data;
      weatherInfo.querySelector('.location').textContent = `${name}, ${lat}, ${lon}`;
      weatherInfo.querySelector('.temperature').textContent = `Temperature: ${temp}°C`;
      weatherInfo.querySelector('.description').textContent = description;

      // Get and display 5-day forecast
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      fetch(forecastUrl)
          .then(response => response.json())
          .then(forecastData => {
              const forecastList = weatherInfo.querySelector('.forecast-list');
              forecastList.innerHTML = '';
              forecastData.list.slice(0, 5).forEach(day => {
                  const li = document.createElement('li');
                  li.textContent = `${day.dt_txt} - ${day.main.temp_min}°C / ${day.main.temp_max}°C - ${day.weather[0].description}`;
                  forecastList.appendChild(li);
              });
          });
      // Get and display alerts
      const alertsUrl = `https://api.openweathermap.org/data/2.5/alerts?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`;
      fetch(alertsUrl)
        .then(response => response.json())
        .then(alertsData => {
          displayAlerts(alertsData);
        })
        .catch(error => console.error('Error fetching alerts:', error));
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

function displayAlerts(alertsData) {
  alertsContainer.innerHTML = ''; // Clear previous alerts

  if (alertsData.length > 0) {
    alertsData.forEach(alert => {
      const alertElement = document.createElement('div');
      alertElement.classList.add('alert'); // Style as needed
      alertElement.textContent = `${alert.event}: ${alert.description}`;
      alertsContainer.appendChild(alertElement);
    });
  } else {
    const noAlertsElement = document.createElement('p');
    noAlertsElement.textContent = 'No active weather alerts.';
    alertsContainer.appendChild(noAlertsElement);
  }
}*/
// Import Leaflet library

const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.querySelector('.weather-info');
const alertsContainer = document.querySelector('.alerts-container');
const mapContainer = document.getElementById('map'); // Reference the map container

const apiKey = 'cff9adc1b9f83485b3d8e45ea80c89e9'; // Replace with your OpenWeatherMap API key

searchButton.addEventListener('click', getWeatherData);

function getWeatherData() {
  const city = cityInput.value;

  // Fetch current weather and alerts
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      // Display current weather data
      const { name, main: { temp, description }, coord: { lon, lat } } = data;
      weatherInfo.querySelector('.location').textContent = `${name}, ${lat}, ${lon}`;
      weatherInfo.querySelector('.temperature').textContent = `Temperature: ${temp}°C`;
      weatherInfo.querySelector('.description').textContent = description;

      // Get and display 5-day forecast (code omitted for brevity)
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      fetch(forecastUrl)
          .then(response => response.json())
          .then(forecastData => {
              const forecastList = weatherInfo.querySelector('.forecast-list');
              forecastList.innerHTML = '';
              forecastData.list.slice(0, 5).forEach(day => {
                  const li = document.createElement('li');
                  li.textContent = `${day.dt_txt} - ${day.main.temp_min}°C / ${day.main.temp_max}°C - ${day.weather[0].description}`;
                  forecastList.appendChild(li);
              });
          });
      // Get and display alerts
      const alertsUrl = `https://api.openweathermap.org/data/2.5/alerts?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`;
      fetch(alertsUrl)
        .then(response => response.json())
        .then(alertsData => {
          displayAlerts(alertsData);
        })
        .catch(error => console.error('Error fetching alerts:', error));
      // Get and display alerts (code omitted for brevity)

      // Initialize map
      const map = L.map('map').setView([lat, lon], 13); // Adjust zoom level as needed
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Create marker for current location
      const marker = L.marker([lat, lon]).addTo(map);
      marker.bindPopup(`<b>${city}</b><br>
      Temperature: ${data.main.temp}°C<br>
      Description: ${data.weather[0].description}`)
        .openPopup();
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

function displayAlerts(alertsData) {
    alertsContainer.innerHTML = ''; // Clear previous alerts
  
    if (alertsData.length > 0) {
      alertsData.forEach(alert => {
        const alertElement = document.createElement('div');
        alertElement.classList.add('alert'); // Style as needed
        alertElement.textContent = `${alert.event}: ${alert.description}`;
        alertsContainer.appendChild(alertElement);
      });
    } else {
      const noAlertsElement = document.createElement('p');
      noAlertsElement.textContent = 'No active weather alerts.';
      alertsContainer.appendChild(noAlertsElement);
    }
  }
// ... (code for displayAlerts function omitted for brevity)

