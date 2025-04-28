"use client"

import { Search } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { FormEvent, useState } from "react";
import { getData, WeatherData } from "./weather/data";
import { DailyForecast, getDailyForecast } from "./weather/forecast";
import WeatherDisplay from "./components/weatherDisplay";
import toast from "react-hot-toast";

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>();
  const [forecastData, setForecastData] = useState<DailyForecast[] | undefined>();
  const [city, setCity] = useState('');
  const [onSubmitted, setOnSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city == "") {
      toast.error("Enter the city Name")
      return;
    }
    setOnSubmitted(true)
    setWeatherData(await getData(city))
    setForecastData(await getDailyForecast(city));
    setOnSubmitted(false)
  }


  return (
    <main className="flex flex-col gap-y-5 h-full w-full items-center">
      <form onSubmit={handleSubmit} className="relative flex items-center p-5 h-25 rounded-2xl gap-2 w-full md:w-[35%] border border-white">
        <Input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type="text"
          placeholder="Enter city name"
          className=" transition-all border-white"
        />
        <Button
          disabled={onSubmitted}
          type="submit"
          className="bg-[#809EA1] transition-all hover:shadow-white hover:border-white  hover:text-white text-black border"
        >
          {onSubmitted ?
            "Loading..."
            : <Search />
          }
        </Button>
      </form>
      {
        weatherData && forecastData &&
        <div className=" md:w-[35%] w-full">
          <WeatherDisplay data={weatherData} forecast={forecastData} />
        </div>
      }
    </main>
  );
}
