import axios from 'axios';
import process from 'process';
import dotenv from 'dotenv';

dotenv.config();
const [ node, script, city] = process.argv;

export const apikey = process.env.OPEN_WEATHER_API_KEY;
// console.log(process.env)

// console.log(apikey);

// axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
//     .then(response => {
//         // console.log(response.data);
//         const tempK = response.data.main.temp;
//         const tempC = (tempK - 273.15).toFixed(2);
//         const tempF = ((tempK * 9) / 5 - 459.67).toFixed(2);
//         // with `&units=metric in api call no conversion needed
//         const temp = response.data.main.temp;
//         const cityName = response.data.name;
//         const countryCode = response.data.sys.country;
//         const weatherCond = response.data.weather[0].description;
        
//         const display = `It is now ${tempC} °C (~ ${tempF} °F) in ${cityName}, ${countryCode} \nThe current weather conditions are: ${weatherCond}`;
//         console.log(display);
//     })
//     .catch(error => console.error("oh no", error))

// for 5-day forecast
async function getWeather() {
    try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`);
            // console.log(response.data);
            const cityName = response.data.city.name;
            const countryCode = response.data.city.country;
            // will do hard coding first --> later maybe I'll build some function to check what time of the day the user asks (to define what hours in the list array to use), maybe even get the weekdays into the output
            const forecast = response.data.list;

            const temp1day = forecast[0].main.temp;
            const weatherCond1day = forecast[0].weather[0].description;
            const temp1night = forecast[4].main.temp;
            const weatherCond1night = forecast[4].weather[0].description;
            const temp2day = forecast[8].main.temp;
            const weatherCond2day = forecast[8].weather[0].description;
            const temp2night = forecast[12].main.temp;
            const weatherCond2night = forecast[12].weather[0].description;
            const temp3day = forecast[16].main.temp;
            const weatherCond3day = forecast[16].weather[0].description;
            const temp3night = forecast[20].main.temp;
            const weatherCond3night = forecast[20].weather[0].description;
            const temp4day = forecast[24].main.temp;
            const weatherCond4day = forecast[24].weather[0].description;
            const temp4night = forecast[28].main.temp;
            const weatherCond4night = forecast[28].weather[0].description;
            const temp5day = forecast[32].main.temp;
            const weatherCond5day = forecast[32].weather[0].description;
            const temp5night = forecast[36].main.temp;
            const weatherCond5night = forecast[36].weather[0].description;


            const display = `\nThe Weather Forecast for the next 5 days in ${cityName}, ${countryCode} is:
            \n Today day: ${temp1day} °C. Weather conditions: ${weatherCond1day}
            \n Today night: ${temp1night} °C. Weather conditions: ${weatherCond1night}
            \n Tomorrow day: ${temp2day} °C. Weather conditions: ${weatherCond2day}
            \n Tomorrow night: ${temp2night} °C. Weather conditions: ${weatherCond2night}
            \n Day after tomorrow day: ${temp3day} °C. Weather conditions: ${weatherCond3day}
            \n Day after tomorrow night: ${temp3night} °C. Weather conditions: ${weatherCond3night}
            \n 3 days from now day: ${temp4day} °C. Weather conditions: ${weatherCond4day}
            \n 3 days from now night: ${temp4night} °C. Weather conditions: ${weatherCond4night}
            \n 4 days from now day: ${temp5day} °C. Weather conditions: ${weatherCond5day}
            \n 4 days from now night: ${temp5night} °C. Weather conditions: ${weatherCond5night}
            `;
            console.log(display);
        } catch (error) {
            console.error("Oh noooooo!!!!", error);
        }
}

getWeather();

