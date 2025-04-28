
*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: YASHPRATAP SHAH

*INTERN ID*: CT04DA274

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSH


# Weather App

A production-ready weather forecasting web application built with modern frontend technologies.\
It fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api) and displays it in a clean, responsive UI.

## Tech Stack

- **[Next.js](https://nextjs.org/)** – React framework for hybrid static and server rendering.
- **[TailwindCSS](https://tailwindcss.com/)** – Utility-first CSS framework for rapid UI development.
- **[Lucide-React](https://lucide.dev/)** – Icon library for consistent and beautiful SVG icons.
- **[Axios](https://axios-http.com/)** – Promise-based HTTP client for seamless API interaction.
- **[React-Hot-Toast](https://react-hot-toast.com/)** – Lightweight notifications library for user feedback.
- **[V0.dev](https://v0.dev/)** – Used for generating initial UI components.
- **[Visual Studio Code](https://code.visualstudio.com/)** – Primary code editor.
- **[ChatGPT](https://openai.com/chatgpt)** – Assisted with refining certain parts of code logic.

---

## Features

- Fetch current weather data for any city worldwide.
- Real-time temperature, weather conditions, humidity, and wind speed.
- Loading states and error handling with toast notifications.
- Fully responsive design optimized for mobile, tablet, and desktop.
- Modular component-based architecture.
- Minimalistic and accessible UI/UX.

---

## Usage

```bash
# Clone the repository
git clone https://github.com/your-username/weather-app.git

# Navigate into the project directory
cd weather-app

# Install dependencies
npm install

# Run the development server
npm run dev

# Visit
http://localhost:3000
```

---

## API Integration

This application uses the [OpenWeatherMap API](https://openweathermap.org/api) to retrieve weather data.\
You must obtain a free API key by creating an account on their platform.

To configure the API key:

1. Create a `.env.local` file in the root directory.
2. Add your API key:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

The API requests are handled using **Axios**, and weather data is displayed dynamically based on the user's input.

---

## Applicability

This project is an ideal starting point for:

- Learning full-stack React development with API integration.
- Understanding real-world asynchronous data fetching patterns.
- Implementing user feedback with toasts and error handling.
- Developing responsive web interfaces using TailwindCSS.
- Showcasing portfolio-ready frontend development skills.

---

## Deployment

The application is deployed on [Vercel](https://vercel.com/), leveraging Next.js' optimized performance and serverless capabilities.

Live Demo: [Weather App](https://weather-app-phi-five-98.vercel.app/)

---

## Credits

- UI components generated with [V0.dev](https://v0.dev/).
- Icons provided by [Lucide-React](https://lucide.dev/).
- Code logic and optimization supported by [ChatGPT](https://openai.com/chatgpt).

---

## License

### MIT License

```
MIT License

Copyright (c) 2025 YASHPRATAP SHAH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

---

# 📂 Project Structure

```
/components  -> Reusable UI components
/pages       -> Next.js pages (index.tsx)
/styles      -> Global and TailwindCSS styles
/utils       -> API logic and helper functions
/public      -> Static assets
```

# OUTPUT

![Image](https://github.com/user-attachments/assets/69990135-38d8-4337-bca4-e12fa56b5e4d)
