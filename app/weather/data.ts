import axios from "axios";
import toast from "react-hot-toast";

interface Weather {
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  degrees: number;
  direction: string;
}

interface Main {
  temp: number;
  humidity: number;
}

interface Sys {
  country: string;
}

export interface WeatherData {
  name: string; // City name
  sys: Sys;
  weather: Weather[];
  main: Main;
  wind: Wind;
}

export function kelvinToCelsius(kelvin: number): number {
  return Math.floor(kelvin - 273.15);
}

export const getData = (city: string) => {
  const options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      appid: process.env.NEXT_PUBLIC_APPID,
      q: city,
      units: "standard",
      lang: "en",
      mode: "json",
    },
  };

  async function fetchData() {
    try {
      const response = await axios.request(options);
      const weatherData: WeatherData = response.data;
      return weatherData;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message);
      return undefined;
    }
  }
  const data = fetchData();
  return data;
};
