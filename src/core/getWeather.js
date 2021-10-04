export async function getWeather(cityName) {
  const key = "3df013696c7d14e7d1aeff2b540ad15b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'ANYTHING_WILL_WORK_HERE'
    }
  });
  const responseJson = await response.json();
  //return responseJson;
  const a = {
    name: responseJson.name,
    temp: responseJson.main.temp,
    icon: responseJson.weather[0].icon
  };
  console.log(responseJson);
  return a;
}
