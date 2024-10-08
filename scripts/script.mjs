console.log("Hello, World! script.mjs working");

import { displayClock  as clock} from "./clock.mjs";
import { getComic as comic} from "./xkcdapi.mjs";
import {getAPOD} from "./apod.mjs";
import {fetchNews} from "./news.mjs";
import {fetchFeaturedArticle} from "./wiki.mjs";
import {getQuote} from "./quote.mjs";
import {getWeather} from "./weather.mjs";
import { getpun } from "./index.mjs";   

getAPOD();
clock();
comic();
fetchNews();
fetchFeaturedArticle();
getQuote();
getWeather();
getpun();
let activeElement;

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ids.forEach(id => {
    document.getElementById(id.toString()).addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the body click event from firing

        const element = document.getElementById(id.toString());

        // Reset the styles of the previously active element
        if (activeElement && activeElement !== element) {
            resetElementStyles(activeElement);
        }

        // Apply new styles to the clicked element
        element.style.display = "flex";
        element.style.backgroundColor = "red";
        element.style.position = "absolute";
        element.style.top = "50%";
        element.style.left = "50%";
        element.style.transform = "translate(-50%, -50%)";
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
        element.style.height = "50vh"; // Adjust as needed
        element.style.width = "50vw"; // Adjust as needed
        element.style.borderRadius = "10px";
        element.style.boxShadow = "10px 10px 10px black";
        element.style.margin = "25px";
        element.style.zIndex = "1000";

        // Update the active element
        activeElement = element;

        //Call specific functions 
        switch (id) {
            case 1:
                fetchFeaturedArticle();
                break;
            case 2:
                // Call function for ID 2
                break;
            case 3:
                // Call function for ID 3
                break;
            case 4:
                getAPOD();
                break;
            case 5:
                // Call function for ID 5
                break;
            case 6:
                clock();
                break;
            case 7:
                // Call function for ID 7
                break;
            case 8:
                // Call function for ID 8
                break;
            case 9:
                // Call function for ID 9
                break;
            default:
                break;
        }
    });
});

// Add event listener to the body to reset the active element when the body is clicked
document.body.addEventListener("click", function () {
    if (activeElement) {
        resetElementStyles(activeElement);
        activeElement = null;
    }
});

// Function to reset the styles of an element
function resetElementStyles(element) {
    element.style.display = "";
    element.style.backgroundColor = "";
    element.style.position = "";
    element.style.top = "";
    element.style.left = "";
    element.style.transform = "";
    element.style.justifyContent = "";
    element.style.alignItems = "";
    element.style.height = "";
    element.style.width = "";
    element.style.borderRadius = "";
    element.style.boxShadow = "";
    element.style.margin = "";
    element.style.zIndex = ""; // Reset z-index
}