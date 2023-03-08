const dataLoad = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db877660f8d3e526d09143ac0d9d7429&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};
const displayData = (data) => {
  const cityName = document.getElementById("city-name");
  cityName.innerText = data.name;
  // console.log(data.main.temp);
  const degree = document.getElementById("degree");
  degree.innerText = data.main.temp;
  const weather = document.getElementById("weather");
  weather.innerText = data.weather[0].main;
};
const searchBtn = () => {
  const searchValue = document.getElementById("search-field").value;
  dataLoad(searchValue);
};
dataLoad("dhaka");
