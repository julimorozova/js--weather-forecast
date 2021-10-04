export function showWeather(el, weatherInfo) {
    const element = el;
    element.innerHTML = `
  <h2 >${weatherInfo.name}</h2>
  <h3>${Math.round(weatherInfo.temp)} deg</h3>
  <img src="https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png"/>
`;

}
