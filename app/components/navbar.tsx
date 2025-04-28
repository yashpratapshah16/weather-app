
import { Cloudy } from "lucide-react";

const Navbar = () => {
  return (
    <div
      className='text-[#809EA1] p-5 w-full shadow-[#809EA1] shadow-xl  bg-black border-white border rounded-lg mb-10 flex items-center justify-around'
    >
      <div className="flex font-bold  gap-2 items-center justify-center">
        <Cloudy className="mx-auto" />
        <h1 className="mx-auto ">
          WEATHER APP
        </h1>
      </div>
      <p>Welcome to Weather App!</p>
    </div>
  )
}

export default Navbar