

//import axios from 'axios';

let articles = [];

const key = "55463e1d1fca41749fea3cc9493a65ae";
const url = `https://newsapi.org/v2/everything?q=keyword`;

export async function fetchNews() {
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
            title_list.push({"title":articles[i].title, "description":articles[i].description, "url":articles[i].url});
        }
        //console.log(articles)
        console.log(title_list);
         // Create a select element
         let selectElement = `<h2>News</h2><select id="newsSelect">`;
         for (let i = 0; i < title_list.length; i++) {
             selectElement += `<option value="${i}">${title_list[i].title}</option>`;
         }
         selectElement += `</select>`;
 
         // Set the innerHTML of the target element
         document.getElementById("8").innerHTML = selectElement + `<div id="newsDescription"></div>`;
         document.getElementById("8").style.display = "block";
        document.getElementById("newsSelect").style.width = "80%";

        // Add an event listener to the select element
        document.getElementById("newsSelect").addEventListener("change", function() {
            //document.getElementById("8").innerHTML = "";
            let index = document.getElementById("newsSelect").value;
            let description = title_list[index].description;
            let url = title_list[index].url;
            console.log(description);
            document.getElementById("newsDescription").innerHTML = `<br>${description}<br><a href="${url}" target="_blank">Read More</a>`;
          document.getElementById("8").style.display = "block";
           document.getElementById("newsSelect").style.width = "80%";
            // console.log(index);
        
            // 
            // console.log(url);
            //window.open(url, "_blank");
        });
            


    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

