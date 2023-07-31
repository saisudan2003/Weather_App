import axios from 'axios';

const API_KEY = "f202b6bb4bce5ffdc3d3dcde3c5c162b";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city,country) => {
    try{
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
        return response.data;
    }catch(error) {
        console.log('error wile calling the api',error.message);
        return error.message;
    }
}