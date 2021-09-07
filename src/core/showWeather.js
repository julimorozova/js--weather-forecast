export function showWeather(el, weatherInfo) {
  try {
    const element = el;
    element.innerHTML = `<div>
  <h1 >${weatherInfo.name}</h1>
  <hr />
  <h2>${weatherInfo.main.temp}</h2>
  <hr />
  <img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png"/>
</div>`;
    return true;
  } catch (e) {
    window.alert("The wrong city was entered");
    return false;
  }
}
