document.getElementById('search-btn').addEventListener('click', function() {
  const city = document.getElementById('city-input').value;
  const apiKey = '926fdc47b9e1562f9ed25efc940430d4'; 
  const cityUrl = `https://apiadvisor.climatempo.com.br/api/v1/climate/locale/3477?token=${apiKey}`;

  console.log('Buscando ID da cidade para:', city);

  // Primeiro, obter o ID da cidade
  fetch(cityUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar ID da cidade');
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 0) {
        const cityId = data[0].id;
        console.log('ID da cidade encontrado:', cityId);
        const weatherUrl = `https://apiadvisor.climatempo.com.br/api/v1/weather/locale/${cityId}/current?token=${apiKey}`;

        // Depois, obter os dados meteorológicos da cidade
        return fetch(weatherUrl);
      } else {
        throw new Error('Cidade não encontrada');
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar dados meteorológicos');
      }
      return response.json();
    })
    .then(data => {
      console.log('Dados meteorológicos recebidos:', data);
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperatura: ${data.data.temperature}°C</p>
        <p>Condição: ${data.data.condition}</p>
        <p>Umidade: ${data.data.humidity}%</p>
        <p>Velocidade do Vento: ${data.data.wind_velocity} km/h</p>
      `;
    })
    .catch(error => {
      console.error('Erro:', error);
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `<p>Erro ao buscar os dados: ${error.message}</p>`;
    });
});
