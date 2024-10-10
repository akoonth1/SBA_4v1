
export async function word_of_the_day() {
    const response = await fetch('wordlist.csv'); // Replace with the actual path to your CSV file
    const data = await response.text();
    const word_list = data.split('\n').map(row => row.split(',')[0].trim()); // Assuming the word is in the first column

    if (word_list.length > 0) {
        const randomIndex = Math.floor(Math.random() * word_list.length);
        const randomWord = word_list[randomIndex];
        console.log('Random word:', randomWord);

        // Call the getDefinition function with the random word
        getDefinition(randomWord);
    } else {
        console.log('The word list is empty.');
    }
console.log(word_list);
console.log(randomWord);
    async function getDefinition(randomWord) {
        const APIKey = '5ac41910-d737-4752-8320-8011c50e13cf'; 
        const url_base = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=${APIKey}`;
        console.log(url_base);
        try {
            const response = await fetch(url_base);
            const data = await response.json();
            console.log(data);

            // Assuming the API returns an array of definitions
            if (Array.isArray(data) && data.length > 0) {
                const definition = data[0].shortdef ? data[0].shortdef.join(', ') : 'No definition found';
                document.getElementById("7").innerHTML = `<strong>${randomWord}:</strong> ${definition}`;
            } else {
                document.getElementById("7").innerHTML = `<strong>${randomWord}:</strong> No definition found`;
            }
        } catch (error) {
            console.error("Error fetching definition:", error);
            document.getElementById("7").innerHTML = `Error fetching definition: ${error}`;
        }
    }
}

// Ensure the DOM is fully loaded before calling word_of_the_day
document.addEventListener('DOMContentLoaded', (event) => {
    word_of_the_day();
});