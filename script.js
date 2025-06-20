const API_KEY = "<2bc5fc53196b3e4e62c83887e19d7b64>";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();

  if (city.length == 0) return;

  fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json()) 
    .then((data) => {
      if (data.cod == 200) {
        document.getElementById("location").innerHTML = data.name;
        document.getElementById("temperature").innerHTML = `${data.main.temp}°C`;
        document.getElementById("description").innerHTML = data.weather[0].description;
      } else {
        document.getElementById("location").innerHTML = "City not found.";
        document.getElementById("temperature").innerHTML = "";
        document.getElementById("description").innerHTML = "";
      }
    })
    .catch((error) => console.error(error));
});
