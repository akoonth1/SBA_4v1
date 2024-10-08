
//Pull xkcd comic data from the xkcd API
//pull the latest comic
const xkcd_api = "https://xkcd.now.sh/?comic=latest";




export async function getComic() {
    try {
        const response = await fetch(xkcd_api);
        const data = await response.json();
        console.log(data);
        console.log(data.img);

        // Check if the element with ID 'comic' already exists
        let comicElement = document.getElementById("comic");
        if (!comicElement) {
            // If it doesn't exist, create it and append it to the body
            comicElement = document.createElement("div");
            comicElement.id = "comic";
            //document.body.appendChild(comicElement);
        }

        // Set the innerHTML of the comicElement
        comicElement.innerHTML = ` <div class="image-container"><img src="${data.img}" alt="xkcd" width="100%" height="100%">  
         <div class="overlay-text" >${data.alt}</div>
        </div>`;
        comicElement.style.height = "100%";
       // Append the comicElement to the div with id '9'
       const container = document.getElementById("3");
       if (container) {
           container.appendChild(comicElement);
       } else {
           console.error("Container with id '3' not found");
       }


        return data;
    } catch (error) {
        console.error("Error fetching xkcd:", error);
    }
}


//https://xkcd.now.sh/?comic=303
//getComic();