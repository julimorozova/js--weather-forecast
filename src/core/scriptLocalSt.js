export async function readCityList() {
  const item = localStorage.getItem("key");
  if (item === null) return [];
  return JSON.parse(item);
}
export function saveCityList(items) {
  localStorage.setItem("key", JSON.stringify(items));
}

export function showCityList(el, list) {
  const element = el;
  // list.map(item => element.insertAdjacentHTML('afterbegin',`<a>${item}</a>`));
  element.innerHTML = `${list
    .map((item) => `<a href="#" class="city_link">${item}</a>`)
    .join("")}`;
}

export function deleteCity(list) {
  while (list.length > 10) {
    list.shift();
  }
}

export function addNewCityToCityList(item, listCity) {
  for (let i = 0; i < listCity.length; i += 1) {
    if (listCity[i] === item) {
      return;
    }
  }
  listCity.push(item);
}
