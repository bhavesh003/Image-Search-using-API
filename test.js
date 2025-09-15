const fetch = require('node-fetch');


async function fetchInstagramData() {
    const url = 'https://instagram-scraper-api2.p.rapidapi.com/v1/hashtag?hashtag=summer';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '899eb27b50mshd1ec2e4109dc533p10aba5jsn8c1b385f56d6',  // Replace with your actual key
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("API Response:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchInstagramData();
