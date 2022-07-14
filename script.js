const button = document.getElementById('search').addEventListener('click', function(){
  const inputSearch = document.getElementById('inputValue').value;

  const API_KEY = `d8bbba61cd230770e89369dfd7746efa`;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      const cityName = data.name;
      const tem = data.main.temp;
      const temp = tem - 273.15;
      const condition = data.weather[0].description;
      console.log(data)

      document.getElementById('city-name').innerText = cityName;
      document.getElementById('temp').innerText = temp.toFixed(2);
      document.getElementById('condition').innerText = condition;
    })
    .catch(res => alert('Place Type Right City Name'));
})




