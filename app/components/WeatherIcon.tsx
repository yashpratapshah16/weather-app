import { lucidWeatherMap } from "@/utils/lucidWeatherMap";
import { Wind } from "lucide-react";

interface WeatherIconProps {
  iconCode: string;
  size?: number;
  color?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconCode, size = 64, color = "currentColor" }) => {
  const LucidIcon = lucidWeatherMap[iconCode] || Wind; // fallback to Wind icon

  return <LucidIcon size={size} color={color} />;
};

export default WeatherIcon;
