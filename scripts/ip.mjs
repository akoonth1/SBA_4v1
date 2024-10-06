



//Looks up the location of the user based on their IP address
//Returns the zipcode of the user
// Used two differnt APIs for redundancey



 export async function getlocation_from_ip() {
    let ip = "";
    let zipcode = "";
    let city = "";
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        console.log('Your Public IP Address:', data.ip);
        ip = data.ip;
        console.log(ip);

        const url = `https://ipapi.co/${ip}/json/`;
        let response2 = await fetch(url);
        let data2 = await response2.json();

        // Check if the response is successful
        if (!response2.ok) {
            throw new Error('Failed to fetch from ipapi.co');
        }

        zipcode = data2.postal;
        city = data2.city;
        console.log(data2);
        console.log(data2.city);
        console.log(data2.region);
        console.log(data2.country);
        console.log(data2.postal);
        console.log(data2.latitude);
        console.log(data2.longitude);
        console.log(data2.timezone);
        console.log(data2.org);
        console.log(data2.asn);
        console.log(data2.ip);
    } catch (error) {
        console.log("Error with ipapi.co, trying ip-api.com", error);

        try {
            const fallbackUrl = `http://ip-api.com/json/${ip}`;
            const fallbackResponse = await fetch(fallbackUrl);
            const fallbackData = await fallbackResponse.json();

            zipcode = fallbackData.zip;
            city = fallbackData.city;
            console.log(fallbackData);
            console.log(fallbackData.city);
            console.log(fallbackData.regionName);
            console.log(fallbackData.country);
            console.log(fallbackData.zip);
            console.log(fallbackData.lat);
            console.log(fallbackData.lon);
            console.log(fallbackData.timezone);
            console.log(fallbackData.org);
            console.log(fallbackData.as);
            console.log(fallbackData.query);
        } catch (fallbackError) {
            console.log("Error with ip-api.com", fallbackError);
        }
    }



  return { zipcode, city };
};


//getlocation_from_ip();