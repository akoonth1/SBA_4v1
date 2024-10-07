




const wikikey = {
    "Client ID": "9257124cf28e307d13c02c5653959c21",
    "Client secret": "895325da2127af4c2310b330e0d29d1aebd775a1",
    "Access token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MjU3MTI0Y2YyOGUzMDdkMTNjMDJjNTY1Mzk1OWMyMSIsImp0aSI6ImQzYjlhMTUwYjQ3Y2U3ODdjMjAxZTVmYjkxYmFiMGU3OTA0YzNhYTNmNzJjNDAwNGNmODYwNDg2NzkwMjdhY2I4ZmM4Mjk3MWIwOTc5YjY3IiwiaWF0IjoxNzI4MjQ5MjEzLjI4OTE4OSwibmJmIjoxNzI4MjQ5MjEzLjI4OTE5MiwiZXhwIjozMzI4NTE1ODAxMy4yODczODQsInN1YiI6Ijc2NjU3Njg2IiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.HliyTs-7CYFx1ejza6jkD27wEEU-NtSmH6Tw_lbCaTpStAhtRPOTBMfTWsC1d-5Dk0QYz17pvOHdRYYvcSmku7pgcMiQKme-czDYzJ5FM3Tehyk6sSFcwLgR-TB_pHU3k3MI38XoYVF5OOFkWcVsVo7oF-N8gM4WKSskN93lF39siEqrE7WBQMYrtS-MZ37IsxmDVB1Xkfcimji87UmHTFIdDMagOiBrTLMKwL-eSZ7FPbdg5mg7CGk96BPIf4iJHhYwobVEEr7vQSwa2hpWo5RFEOPS-UkUR4bAUa_G9K13s-6jR1MfCc2d3XXwYqsLWvtpT5Ht4unEIJgwZ-UmBJdwXoDAMmtyuOJ5PWPlXHgsul4FNBQCrlLrFqo2BeLKZqqO2hnMmw5BCd9MRVoPUep1jHCBI4rt_LQkhew3ByeobAKSipohu2Mue_C4XfEZeBZxRU_eNV1LXqIfzV00tpPITG-lIRpgDzS7Gg7HeL3o5-lvaYV6aqkwG7A-A7vOkq5cBbeuTKs4HuOqG9UD_c7q7e7KEgOHC2aQIQcVeyJA8Xdpu6KBVabUjDO4tU83iSEgSUpL8o15fO1dggR8yGr3H3oD-mLwFpQ5Y-fJnKYzz8iBVB9GI-mog6VUfUC3xSTc6uDTlGSG4X6qj9iv1_vRTeJ8Pg_mQ8X5_C9iCfM"
};

const language_code = 'en'; // English
const headers = {
    'Authorization': `Bearer ${wikikey["Access token"]}`,
    'User-Agent': 'Aquasar12018'
};

const base_url = 'https://api.wikimedia.org/feed/v1/wikipedia/';
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const date = `${year}/${month}/${day}`; // Current date in YYYY/MM/DD format
const url = `${base_url}${language_code}/featured/${date}`;
console.log(url);

async function fetchFeaturedArticle() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        document.getElementById("1").innerHTML = 
        `<h4>Today In History: ${date}</h4> 
        <h5>${data.onthisday[0].text}</h5> 
        <h5>${data.onthisday[1].text}</h5>
        <h5>${data.onthisday[2].text}</h5>`
        document.getElementById("1").style.display = "block"
        document.getElementById("1").style.color = "white";
        ;
   
        ;
    } catch (error) {
        console.error("Error fetching featured article:", error);
    }
}

//fetchFeaturedArticle();
