import { getWeather } from "../core/getWeather";

describe("", () => {
  const weather = {
    city: 'Voronezh',
    temp: 20
  }

  it("",  async () => {
    fetch.mockResponseOnce(
      JSON.stringify(weather)
    );
      const response = await getWeather(weather.city);
      console.log(response);
      expect(response.name).toBe(weather.city);
  })
})