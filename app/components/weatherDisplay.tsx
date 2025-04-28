import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { kelvinToCelsius, WeatherData } from "../weather/data"
import WeatherIcon from "./WeatherIcon"
import { DailyForecast } from "../weather/forecast"


interface WeatherDisplayProps {
    data: WeatherData
    forecast: DailyForecast[]
}

export default function WeatherDisplay({ data, forecast }: WeatherDisplayProps) {
    return (
        <div className="space-y-4 w-full">
            <Card className="w-full border-white">
                <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex justify-between items-center">
                        <span>
                            {data.name}, {data.sys.country}
                        </span>
                        <WeatherIcon iconCode={data.weather[0].icon} />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-4xl font-bold">{kelvinToCelsius(data.main.temp)}°C</p>
                            <p className="text-muted-foreground">{data.weather[0].main}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">Humidity: {data.main.humidity}%</p>
                            <p className="text-sm">Wind: {Math.floor(data.wind.speed)} km/h</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <h2 className="text-xl font-semibold mt-6 mb-2">5-Day Forecast</h2>
            <div className="grid grid-cols-5 gap-2">
                {forecast.map((day, index) => (
                    index != 0 &&
                    <Card key={index} className="overflow-hidden border-white">
                        <CardContent className="p-3 text-center">
                            <p className="text-sm font-medium">{day.day}</p>
                            <div className="flex justify-center my-2"><WeatherIcon iconCode={day.icon} /></div>
                            <p className="text-sm font-bold">{day.temperature}°C</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
