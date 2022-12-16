const weatherAPI =
  "https://api.weatherapi.com/v1/current.json?key=3068b08c761845a8b82210239221312&aqi=no";
const keyword = document.querySelector(".keyword");
const btnsearch = document.querySelector(".btn-search");
const cuaca = document.getElementById("cuaca");

btnsearch.onclick = () => {
  fetch(`${weatherAPI}&q=${keyword.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let element = "";
      element = showElement(data);
      cuaca.innerHTML = element;
    });
};

function showElement(data) {
  return `
    <h3>City : ${data.location.name}, ${data.location.country}</h3>
    <span>Condition : ${data.current.condition.text}</span>
    <span><img src="https:${data.current.condition.icon}" alt=""></span>
    <span>Temperature : ${data.current.temp_c} C</span>
    <span>Wind Speed : ${data.current.wind_kph} km/h</span>`;
}
