type Item = {
    id: string,
    title: string
};
const array: Item[] = Object.freeze([{id: '1', title: 'a'}, {id: '2', title: 'b'}]);

console.log(array);

array[0].id = '5';
console.log(array);
