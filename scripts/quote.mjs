

//https://api.quotable.io/quotes/random



export async function getQuote() {
    const url = `https://api.quotable.io/quotes/random`;
    try {
        const response = await axios.get(url);
        const data = await response.data;
        console.log(data);
        console.log(data[0].author);
        console.log(data[0].content);
        document.getElementById("3").innerHTML = `
            <h2>Quote of the Day</h2>
            <h3>${data[0].content}</h3>
            <h4>Author: ${data[0].author}</h4>
        `;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("3").innerHTML = error;
    }

       // document.getElementById("6").innerHTML = error;
       let quote_box = document.getElementById("3");
       document.getElementById("3").style.display = "block";
       let reloaded = document.createElement("button");
       reloaded.innerHTML = "Reload";
       quote_box.appendChild(reloaded);
       reloaded.addEventListener("click", getQuote);
}

