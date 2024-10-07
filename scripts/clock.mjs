


export function displayClock() {
    // Check if an h1 element already exists and remove it
    const existingTimeString = document.querySelector("h1");
    if (existingTimeString) {
        existingTimeString.remove();
    }

    // Create a new h1 element and append it to the body
    const display = new Date().toLocaleTimeString();
    let time_string = document.createElement("h1");
    document.getElementById(5).appendChild(time_string);
    //document.body.appendChild(time_string);
    time_string.innerHTML = display;
    time_string.style.color = "white";
    time_string.style.fontSize = "60px";
    time_string.style.fontFamily = "Arial";
    time_string.style.textAlign = "center";
    time_string.style.position = "absolute";
    time_string.style.itemAlign = "center";


    //document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh"; // Ensure the body takes the full height of the viewport
    document.body.style.margin = "0"; // Remove default margin


    
    // Set a timeout to call displayClock again after 1 second
    setTimeout(displayClock, 1000);
}