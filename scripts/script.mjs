// Import necessary functions
import { fetchFeaturedArticle } from "./wiki.mjs";
import { getAPOD } from "./apod.mjs";
import { getComic } from "./xkcdapi.mjs"; // Ensure this function is imported
import { displayClock as clock } from "./clock.mjs"; // Ensure this function is imported
import { getWeather  as weather} from "./weather.mjs"; // Ensure this function is imported
import { getQuote } from "./quote.mjs";
import { getpun } from "./wordplay.mjs";
import {fetchNews} from "./news.mjs";
//import fs from 'fs';
//import { word_of_the_day } from "./dictionary.mjs";


fetchFeaturedArticle();
weather();
getQuote();
getAPOD();
clock();
getComic();
//getpun();
fetchNews();

// Define the activeElement variable
let activeElement = null;

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ids.forEach(id => {
    document.getElementById(id.toString()).addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the body click event from firing

        const element = document.getElementById(id.toString());

        // Reset the styles of the previously active element
        if (activeElement && activeElement !== element) {
            activeElement.classList.remove("active");
            resetElementStyles(activeElement);
        }

        // Apply new styles to the clicked element
        element.classList.add("active");

        // Update the active element
        activeElement = element;

        if (activeElement === element) {
            return; // Do nothing if the clicked element is already active
        }

        // Call specific functions based on the ID
        switch (id) {
            case 1:
                fetchFeaturedArticle();
                break;
            case 2:
                // Call function for ID 2
             weather();
                break;
            case 3:
                // Call function for ID 3
                getQuote();
                break;
            case 4:
                getAPOD();
                break;
            case 5:
                clock();
                break;
            case 6:
                getComic(); 
                break;
            case 7:
                // Call function for ID 7
                //getpun();
                break;
            case 8:
                // Call function for ID 8
                fetchNews();
                break;
            case 9:
                getComic(); // Ensure the comic function is called for ID 9
                break;
            default:
                break;
        }
    });
});

// Add event listener to the body to reset the active element when the body is clicked
document.body.addEventListener("click", function () {
    if (activeElement) {
        activeElement.classList.remove("active");
        resetElementStyles(activeElement);
        activeElement = null;
    }
});

// Function to reset the styles of an element
function resetElementStyles(element) {
    console.log("Resetting styles for element:", element.id); // Debugging log
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


