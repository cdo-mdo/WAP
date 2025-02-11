const makeMePizza = function(){
    return new Promise(function(resolve,reject){
        if(true){
            console.log('preparing pizza');
            resolve("Here is your pizza!"); // then() callback will be called
            console.log('pizza is ready');
        } else {
            reject("Sorry no more cheese!"); // catch() callback will be called
        }
    })
};
   
console.log(`start`);
makeMePizza()
    .then(data => console.log(data))
    .catch(err => console.error(err));
console.log('Finish my homework');
console.log(`end`);