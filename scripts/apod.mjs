



// Fetch the Astronomy Picture of the Day (APOD) from NASA's API
export async function getAPOD() {
    const apod_api_key = "bLHSPOnPxhPjLmj8JbG5oogaqtxc0BBclbhfotkH";
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apod_api_key}`);
        const data = await response.json();
        console.log(data.url);
        // Ensure the element with ID 'div' exists
        const divElement = document.getElementById("4");
        divElement.style.width = "100%";
        divElement.style.opacity = "1";
     
        //divElement.style.position = "absolute";
        //console.log(divElement);
        console.log(data);
        if (divElement) {
            divElement.innerHTML = `
                <div class="image-container">
                    <img src="${data.url}" alt="APOD" width="100%" height="100%">
                    <div class="overlay-text">${data.explanation}</div>
                </div>
            `;
           
        } else {
            console.error("Element not found.");
        }
        return data;
    } catch (error) {
        console.error("Error fetching APOD:", error);
    }
}