type Quote = { quote: string; };

fetch('https://api.kanye.rest/')
    .then((rawResponse: Response) => rawResponse.json())
    .then((jsonBody: Quote) => console.log(jsonBody.quote))
    .catch(console.error);

// Remember to use try/catch in case of network problems
async function fetchData() {
    const rawResponse: Response = await fetch('https://api.kanye.rest/');
    const jsonBody: Quote = await rawResponse.json();
    console.log(jsonBody.quote);
}
fetchData();

