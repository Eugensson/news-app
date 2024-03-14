// const BASE_URL = import.meta.env.VITE_WEATHER_BASE_API_URL
// const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

// export const getCurrentWeather = async (lat, lon) => {
//   const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
//   return await response.json();
// }

export const getCurrentWeather = async (lat, lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=dbe190140250d3087dbd292674c0b7da`)
  return await response.json();
}