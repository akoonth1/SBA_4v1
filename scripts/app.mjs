//XYQUGA-HHLQ7H6JAG

// http://api.wolframalpha.com/v2/query

//PLease enable CORS demo on heroKu
async function getWolframAlpha(input_query) {
    const appid = "XYQUGA-HHLQ7H6JAG";
    let input = input_query;
     const url = `https://cors-anywhere.herokuapp.com/http://api.wolframalpha.com/v2/query?input=${encodeURIComponent(input)}&appid=${appid}&includepodid=Result`;
    // https://cors-anywhere.herokuapp.com/corsdemo
    try {
        console.log(url);
        const response = await fetch(url);
        const textData = await response.text();
        console.log(textData);
        
        //Parse the XML
         const parser = new DOMParser();
         const xmlDoc = parser.parseFromString(textData, "application/xml");
         console.log(xmlDoc);

        // Extract relevant information
        const queryResult = xmlDoc.querySelector("queryresult");
        const pods = queryResult.querySelectorAll("pod");
        console.log(pods);
        if (!pods.length) {
            resultsDiv.innerHTML = "No results found or Please clarify your question";
            return;
        }
        // Create a container to display the results
        const resultsContainer = document.createElement("div");
        resultsContainer.id = "wolfram-results";
        document.body.appendChild(resultsContainer);

       // Display the results
        pods.forEach(pod => {
            const podTitle = pod.getAttribute("title");
            const subpods = pod.querySelectorAll("subpod");

            const podElement = document.createElement("div");
            podElement.className = "pod";
            podElement.innerHTML = `<h2>${podTitle}</h2>`;
            let numpods;
            subpods.forEach(subpod => {
                const subpodTitle = subpod.getAttribute("title");
                const plaintext = subpod.querySelector("plaintext").textContent;
                const img = subpod.querySelector("img");
                numpods = queryResult.getAttribute("numpods");

                const subpodElement = document.createElement("div");
                subpodElement.className = "subpod";
                subpodElement.innerHTML = `<h3>${subpodTitle}</h3><p>${plaintext}</p>` + (img ? `<img src="${img.getAttribute("src")}" alt="${subpodTitle}">` : "");

                podElement.appendChild(subpodElement);
                // console.log(plaintext);
                // console.log(img);
                // console.log(subpodTitle);
                // console.log(subpodElement);
                // console.log(numpods);
            });
            if (numpods >= 1){
                resultsDiv.appendChild(podElement);
            }
            else{
             resultsDiv.innerHTML = "Please clarify your question";
            }
        });

        //Log the data and a message
        console.log(xmlDoc);
        console.log("Wolfram Alpha data displayed");
        return textData; //xmlDoc;
    } catch (error) {
        console.error("Error fetching Wolfram Alpha:", error);
    }
}
    
const search_box = document.getElementById("9");
search_box.innerHTML ="<br><br><h3>WolfRam Alpha Search</h3> <br>";
search_box.style.display = "block";
search_box.appendChild(document.createElement("input"));
search_box.appendChild(document.createElement("button"));
const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
//resultsDiv.innerHTML = "<h2>Results</h2>";
search_box.appendChild(resultsDiv);
search_box.children[4].placeholder = "Enter a question";
search_box.children[5].innerHTML = "Search";
search_box.children[5].setAttribute("required", "true");
search_box.children[5].addEventListener("click", function() {
resultsDiv.innerHTML = "";
let search_value = search_box.children[4].value;
console.log(search_value);
getWolframAlpha(search_value);
});

