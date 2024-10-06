
import {getlocation_from_ip as zippy} from './ip.mjs';


// let zip = async function zippy() {
//     let zip = await zippy();
//     console.log(zip);
//     return zip;
// }
let location = await zippy();
let zip = await location.zipcode;


console.log(zip);
console.log(location.city);



let weather_key ="7N4DRZS9RZ9TYNNQVC3ZLU7KN";
let weather_url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}?key=${weather_key}`
let weather_details ={};

async function getWeather() {
    try {
        const response = await fetch(weather_url);
        const data = await response.json();
        console.log(data);
        console.log(data.days[0].tempmin);
        console.log(data.days[0].tempmax);
        console.log(data.days[0].conditions);
        console.log(data.currentConditions);
        console.log(data.currentConditions.temp);
        document.getElementById("2").innerHTML = `
            <h2>Weather for ${location.city}</h2>
            <h3>Current Temp: ${data.currentConditions.temp}°F</h3>
            <h4>High: ${data.days[0].tempmax}°F</h4>
            <h4>Low: ${data.days[0].tempmin}°F</h4>
            <p>Conditions: ${data.days[0].conditions}</p>
        `;
        document.getElementById("2").style.display = "block";
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

getWeather();