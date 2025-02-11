fetch ('https://reqres.in/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "email": "eve.holt@reqres.in", "password": "cityslicka" })
})
.then((rawResponse: Repsonse) => rawResponse.json())
.then((jsonBody: { token: string; }) => console.log(jsonBody.token));
