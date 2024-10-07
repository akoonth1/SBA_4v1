//XYQUGA-HHLQ7H6JAG

// http://api.wolframalpha.com/v2/query


async function getWolframAlpha() {
    const appid = "XYQUGA-HHLQ7H6JAG";
    const input = "Capital of France?";
    // const url = `https://cors-anywhere.herokuapp.com/http://api.wolframalpha.com/v2/query?input=${encodeURIComponent(input)}&appid=${appid}&includepodid=Result`;
    // https://cors-anywhere.herokuapp.com/corsdemo
    try {
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

            subpods.forEach(subpod => {
                const subpodTitle = subpod.getAttribute("title");
                const plaintext = subpod.querySelector("plaintext").textContent;

                const subpodElement = document.createElement("div");
                subpodElement.className = "subpod";
                subpodElement.innerHTML = `<h3>${subpodTitle}</h3><p>${plaintext}</p>`;

                podElement.appendChild(subpodElement);
            });

            resultsContainer.appendChild(podElement);
        });

        //Log the data and a message
        console.log(xmlDoc);
        console.log("Wolfram Alpha data displayed");
        return textData; //xmlDoc;
    } catch (error) {
        console.error("Error fetching Wolfram Alpha:", error);
    }
}
    

//getWolframAlpha();
