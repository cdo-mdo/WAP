enum Technologies {
    Angular,
    React,
    ReactNative
}

let tech: Technologies;
tech = 0;
tech = 1;
tech = 2;
tech = Technologies.React;

console.log(Technologies.Angular);
console.log(Technologies['React']);
console.log(Technologies[0]);

console.log(Technologies);

let values: number[] = [12, 24, 48];
console.log(values);

let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
console.log(fruits);