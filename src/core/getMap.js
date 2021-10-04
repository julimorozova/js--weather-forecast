async function getMap(weather, map) {
  const url = 'https://static.maps.2gis.com/1.0?s=400x400&c=57.6299,39.8737&z=10'
  const mapJson = await fetch(url)
  map.style.backgroundImage = mapJson.url
  console.log(mapJson.url);

}