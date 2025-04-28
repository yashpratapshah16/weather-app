import axios from "axios";

export interface DailyForecast {
  day: string;
  temperature: number;
  icon: string;
}

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
  dt_txt: string;
}

interface ForecastResponse {
  list: ForecastItem[];
}

export const getDailyForecast = async (
  city: string
): Promise<DailyForecast[] | undefined> => {
  const options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/forecast",
    params: {
      appid: process.env.NEXT_PUBLIC_APPID,
      q: city,
      lang: "en",
      units: "metric",
      mode: "json",
    },
  };
  try {
    const response = await axios(options);
    const data: ForecastResponse = await response.data;

    const forecastByDate: Record<string, ForecastItem[]> = {};

    data.list.forEach((item) => {
      const [date] = item.dt_txt.split(" ");
      if (!forecastByDate[date]) {
        forecastByDate[date] = [];
      }
      forecastByDate[date].push(item);
    });

    const dailyForecast: DailyForecast[] = [];

    for (const date in forecastByDate) {
      const forecasts = forecastByDate[date];

      let closest = forecasts[0];
      let minDiff = Math.abs(getHour(closest.dt_txt) - 12);

      forecasts.forEach((forecast) => {
        const hour = getHour(forecast.dt_txt);
        const diff = Math.abs(hour - 12);
        if (diff < minDiff) {
          closest = forecast;
          minDiff = diff;
        }
      });

      dailyForecast.push({
        day: getDayName(closest.dt),
        temperature: Math.round(closest.main.temp),
        icon: closest.weather[0].icon,
      });
    }
    return dailyForecast;
  } catch (error) {
    console.log(error);
  }
};

function getHour(dt_txt: string): number {
  return parseInt(dt_txt.split(" ")[1].split(":")[0], 10);
}

function getDayName(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleDateString("en-US", { weekday: "short" });
}
