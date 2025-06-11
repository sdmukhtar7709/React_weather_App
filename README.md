# React Weather App

A simple and modern weather app built with **React** and **Vite**.  
It fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api) and displays it in a clean, responsive card UI.

## Features

- Search weather by city name
- Shows temperature, feels like, humidity, min/max temp, wind speed, cloudiness, pressure, visibility, and more
- Weather icon and background image change based on current weather
- Responsive and full-screen design
- Error handling for invalid city names

## Demo

![Weather App Screenshot](https://user-images.githubusercontent.com/your-screenshot.png)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-weather-app.git
cd react-weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  ├── App.jsx
  ├── WeatherApp.jsx
  ├── searchbox.jsx
  ├── InfoBox.jsx
  ├── index.css
  └── infoBox.css
```

## Configuration

- The OpenWeatherMap API key is set in `searchbox.jsx`.  
  For production, use environment variables for security.

## Deployment

You can deploy this app on [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any static hosting.

## License

MIT

---

**Made with ❤️ using React and Vite**
