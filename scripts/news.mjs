

//import axios from 'axios';



const key = "55463e1d1fca41749fea3cc9493a65ae";
const url = `https://newsapi.org/v2/everything?q=keyword`;

async function fetchNews() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': key
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

fetchNews();