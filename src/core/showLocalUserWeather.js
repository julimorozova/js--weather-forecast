import { getLocalUserWeather } from "./getLocalUserWeather";
import { getWeather } from "./getWeather";
import { showWeather } from "./showWeather";

export async function showLocalUserWeather() {
  const weatherInfoEl = document.querySelector("#weatherInfo");
  const userCity = await getLocalUserWeather();
  const weather = await getWeather(userCity.city);
  showWeather(weatherInfoEl, weather);
}
