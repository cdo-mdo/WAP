function work(milliseconds: number) {
    const current = Date.now();
    
    while (Date.now() - current < milliseconds) {
        console.log('doing the work');
    }

    console.log(`time to wait = ${Date.now() - current} milliseconds`);
}

console.log('I have to wait');
work(1);
console.log('until I can continue');
