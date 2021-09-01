import axios from 'axios';
import process from 'process';

const [ node, script, city] = process.argv;

const apikey = '4d117631921f7c71863a35c91745442a';

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
.then(response => {
    // console.log(response.data);
    const tempK = response.data.main.temp;
    const tempC = (tempK - 273.15).toFixed(2);
    const cityName = response.data.name;
    const countryCode = response.data.sys.country;
    const weatherCond = response.data.weather[0].description;
    const display = `It is now ${tempC}°C in ${cityName}, ${countryCode} \nThe current weather conditions are: ${weatherCond}`;
    console.log(display);
})
.catch(error => console.log("oh no", error))


// async function getWeather() {
//     try {
//             const response = await axios.get();
//             console.log(response);
//         } catch (error) {
//             console.error(error);
//         }
// }