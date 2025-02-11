const [firstName, id, website] = ['Asaad', 123, 'miu.ecu'];
console.log(`First Name = ${firstName}`);
console.log(`id = ${id}`);
console.log(`website = ${website}`);

const {width, color: backgroundColor = 'white'} = {width: 300, color: "black"};
console.log(`width = "`+ width);
console.log('color = ' + color);