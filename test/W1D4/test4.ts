const asaad = {name: 'Asaad Saad', height: 180};
Object.freeze(asaad);

try {
    asaad.height = 185;
}
catch (error) {
    console.error(error.message);
}
console.log(asaad.height);