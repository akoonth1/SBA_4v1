
import {getlocation_from_ip as zippy} from './ip.mjs';



export async function getWeather() {
let location = await zippy();
let zip = await location.zipcode;


// console.log(zip);
// console.log(location.city);
// console.log(location.latitude);
// console.log(location.longitude);




let weather_key ="7N4DRZS9RZ9TYNNQVC3ZLU7KN";
let weather_url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}?key=${weather_key}`
let weather_details ={};

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

        try {
            const fallbackUrl = `https://api.weather.gov/points/${location.latitude},${location.longitude}`;
            const fallbackResponse = await fetch(fallbackUrl);
            const fallbackData = await fallbackResponse.json();
            console.log(fallbackData);

            const forecastUrl = fallbackData.properties.forecast;
            console.log(forecastUrl);

            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();
            console.log(forecastData);
             // Display the fallback weather data
             document.getElementById("2").innerHTML = `
             <h2>Weather for ${fallbackData.properties.relativeLocation.properties.city}</h2>
             <h3>Current Temp: ${forecastData.properties.periods[0].temperature}°F</h3>
             <h4>High: ${forecastData.properties.periods[0].temperature}°F</h4>
             <h4>Low: ${forecastData.properties.periods[0].temperature}°F</h4>
             <p>Conditions: ${forecastData.properties.periods[0].shortForecast}</p>
         `;
         document.getElementById("2").style.display = "block";

    }
    catch (error) {
        console.error("Error fetching weather:", error);
    }''



}}

getWeather();


