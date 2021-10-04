export async function getLocalUserWeather() {
  const url = "https://get.geojs.io/v1/ip/geo.json";
  const response = await fetch(url);
  return response.json();
}
