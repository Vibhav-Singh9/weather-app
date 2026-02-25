import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchWeather = async (city) => {
    const res = await axios.get(`${API}/api/weather/${city}`);
    return res.data;
}