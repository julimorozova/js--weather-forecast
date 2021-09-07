import { showLocalUserWeather } from "./core/showLocalUserWeather";
import "./css/style.scss";
import { getWeather } from "./core/getWeather";
import {
  deleteCity,
  readCityList,
  saveCityList,
  showCityList,
  addNewCityToCityList
} from "./core/scriptLocalSt";
import { showWeather } from "./core/showWeather";

import { getHistoricalWeatherFromCityList } from "./core/getHistoricalWeatherFromCityList";

/* async function getMap() {
  const keyMap = "AIzaSyCFzZfX_ky_YiI8YBmTsZbKWUhS8ofRLUw";
  const urlMap = `https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=${keyMap}`;
  const map = await fetch(urlMap);
  return map;
} */

/* function showMap(el, map) {
  el.innerHTML = `<div>
  <img src="${map}" alt="map"/>
</div>`;
} */

(async function () {
  const formEl = document.querySelector("#form");
  const inputEl = document.querySelector("#userInput");
  const weatherInfoEl = document.querySelector("#weatherInfo");
  const cityListEl = document.querySelector("#historyList");

  await showLocalUserWeather();

  const listCity = await readCityList();
  showCityList(cityListEl, listCity);
  await getHistoricalWeatherFromCityList();

  formEl.addEventListener("submit", async (event) => {
    event.preventDefault();

    const cityName = inputEl.value;
    const weather = await getWeather(cityName);

    const isTrueCity = showWeather(weatherInfoEl, weather);
    if (isTrueCity) {
      addNewCityToCityList(cityName, listCity);
      deleteCity(listCity);
      showCityList(cityListEl, listCity);
      saveCityList(listCity);
      inputEl.value = "";
    }
    await getHistoricalWeatherFromCityList();
  });
})();
