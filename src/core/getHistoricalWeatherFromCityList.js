import { getWeather } from "./getWeather";
import { showWeather } from "./showWeather";

export async function getHistoricalWeatherFromCityList() {
  const historicalCityListEl = document.querySelectorAll(".city_link");
  const weatherInfoEl = document.querySelector("#weatherInfo");
  historicalCityListEl.forEach((item) => {
    item.addEventListener("click", async (event) => {
      event.preventDefault();
      const oldCity = event.target.innerText;
      const weather = await getWeather(oldCity);
      showWeather(weatherInfoEl, weather);
    });
  });
}
