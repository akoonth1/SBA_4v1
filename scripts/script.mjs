console.log("Hello, World! script.mjs working");

import { displayClock  as clock} from "./thing1.mjs";
import { getComic as comic} from "./xkcdapi.mjs";

const apod_api_key = "bLHSPOnPxhPjLmj8JbG5oogaqtxc0BBclbhfotkH";

async function getAPOD() {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apod_api_key}`);
        const data = await response.json();
        console.log(data.url);
        // Ensure the element with ID 'div' exists
        const divElement = document.getElementById("5");
        divElement.style.width = "100%";
        divElement.style.opacity = "0.5";
     
        //divElement.style.position = "absolute";
        //console.log(divElement);
        console.log(data);
        if (divElement) {
            divElement.innerHTML = `<img src="${data.url}" alt="APOD" width="100%" height="100%"> <p title=${data.explanation}></p>`;
           // divElement.style.display = "flex";
           divElement.style.border-radius; "15px";

         
            comic();
        } else {
            console.error("Element not found.");
        }
        return data;
    } catch (error) {
        console.error("Error fetching APOD:", error);
    }
}

getAPOD();
clock();




// function displayClock() {
//     // Check if an h1 element already exists and remove it
//     const existingTimeString = document.querySelector("h1");
//     if (existingTimeString) {
//         existingTimeString.remove();
//     }

//     // Create a new h1 element and append it to the body
//     const display = new Date().toLocaleTimeString();
//     let time_string = document.createElement("h1");
//     document.body.appendChild(time_string);
//     time_string.innerHTML = display;
//     time_string.style.color = "white";
//     time_string.style.fontSize = "100px";
//     time_string.style.fontFamily = "Arial";
//     time_string.style.textAlign = "center";
//     time_string.style.position = "relative";
//     time_string.style.itemAlign = "center";

    
//     // Set the body to use Flexbox and center the content
//     document.body.style.display = "flex";
//     document.body.style.justifyContent = "center";
//     document.body.style.alignItems = "center";
//     document.body.style.height = "100vh"; // Ensure the body takes the full height of the viewport
//     document.body.style.margin = "0"; // Remove default margin



//     // Set a timeout to call displayClock again after 1 second
//     setTimeout(displayClock, 1000);
// }