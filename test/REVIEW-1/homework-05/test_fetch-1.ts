const URL = 'https://dummyjson.com/products';
fetch(`${URL}`)
.then(res => res.json());
.then(console.log);
