let now = new Date();
function reloadPage() {
  let span = document.querySelector("#time");
  span.innerHTML = `${currentDate}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satuday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let currentDate = `It's ${day}, ${hour} : ${minutes}`;
reloadPage(currentDate);
//
function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#number").innerHTML = Math.round(
    response.data.main.temp
  );
}
function enterHere(event) {
  event.preventDefault();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let city = document.querySelector("#city-name").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search");
form.addEventListener("submit", enterHere);
//

//
