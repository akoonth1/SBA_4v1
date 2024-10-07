export async function getpun() {
    const url = "https://punapi.rest/api/pun";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    try {
        console.log("Fetching pun from:", url);
        const response = await fetch(proxyUrl + url, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        console.log("Response received:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data received:", data);
        console.log("Pun:", data.pun);
        document.getElementById("7").innerHTML = `
            <h2>Today's Pun</h2>
            <h3>${data.pun}</h3>
        `;
    } catch (error) {
        console.error("Error fetching pun:", error);
        document.getElementById("7").innerHTML = `
            <h2>Error</h2>
            <p>${error.message}</p>
        `;
    }
}
//getpun();