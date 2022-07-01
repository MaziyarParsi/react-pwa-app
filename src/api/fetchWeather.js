import axios from "axios";

const URL= "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "6cfa0413b2eeac7a01fbc2178e24e2ed"
export const fetchWeather = async(query)=>{
    const response = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY
        }
    })
    const data = await response.data
    return data
}