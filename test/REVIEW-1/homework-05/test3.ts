function work(milliseconds: number): void {
    const currentTime = Date.now();

    while (Date.now() - currentTime < milliseconds) {
        console.log('doing the work');
    }
}

console.log('I delegate');
setTimeout(() => work(1), 0);
console.log('I can do someting else');
