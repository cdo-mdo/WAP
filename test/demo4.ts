// JSON {"firstname", "Asaad"}
type my_object = {"firstname": string, "age": number;};
const json_obj = {"firstname": "Asaad", "age": 45};

const json_string = JSON.stringify(json_obj);
console.log(json_string);
const json_object: my_object = JSON.parse(json_string) as my_object;
console.log(json_object.firstname);

// Fetch API
// GET, PUT, POST, PATCH, FETCH, HEAD, OPTIONS

export interface DemoResponse

