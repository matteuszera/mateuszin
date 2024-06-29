document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'YOUR_API_KEY'; // Substitute with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching the weather data:', error);
      });
  });
  