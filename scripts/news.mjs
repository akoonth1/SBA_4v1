

//import axios from 'axios';

let articles = [];

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
        //console.log(data);
        articles =data.articles
        console.log(articles.length);
        let title_list =[]
        for (let i = 0; i < articles.length; i++) {
            title_list.push(articles[i].title);
        }

        console.log(title_list);
         // Create a select element
         let selectElement = `<h2>News</h2><select id="newsSelect">`;
         for (let i = 0; i < title_list.length; i++) {
             selectElement += `<option value="${i}">${title_list[i]}</option>`;
         }
         selectElement += `</select>`;
 
         // Set the innerHTML of the target element
         document.getElementById("7").innerHTML = selectElement;
         document.getElementById("7").style.display = "block";
            document.getElementById("newsSelect").style.width = "80%";
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

fetchNews();