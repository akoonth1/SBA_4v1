
let url_base =  "https://api.open5e.com/search/?text="
let search_query = "fire"
let url = url_base + search_query
console.log(url)

async function getspell() {
    let spell_names =[];
    try {
        const response = await fetch("https://api.open5e.com/v2/spells/?page=2");
        const data = await response.json();
        // console.log(data);
        // console.log(data.results[0].name);
        // console.log(data.results[0].desc);
        // console.log(data.results[0].higher_level);
        // console.log(data.results[0].key);
        data.results.forEach(element => { 
            spell_names.push({ [element.key]: element.name });
            
        });
        //spell_names.push({ [data.results[i].key]: data.results[i].name });


        console.log(spell_names);
        //const spellNamesContainer = document.getElementById("7");
        
        // if (spellNamesContainer) {
        //     const spellElement = document.createElement("div");
        //     spellElement.className = "spell";
        
        //     spellElement.innerHTML = `
        //         <h3>${data.results[0].name}</h3>
        //         <p>${data.results[0].desc}</p>
        //         <p><strong>Higher Level:</strong> ${data.results[0].higher_level}</p>
        //         <p><strong>Key:</strong> ${data.results[0].key}</p>
        //     `;
        
           //spellNamesContainer.appendChild(spellElement);
        // } else {
        //     console.error("Element with ID 'spell-names' not found.");
        // }


    } catch (error) {
        console.error("Error fetching spell:", error);
        //document.getElementById("7").innerHTML = error;
    }
}
getspell();