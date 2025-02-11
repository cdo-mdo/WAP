function work(milliseconds: number): void {
    let startTime: number = Date.now();
    let finishTime: number = startTime + milliseconds;

    while (startTime < finishTime) {
        startTime = Date.now();
    }
}

console.log(`start`);
setTimeout(() => work(2000), 0);
console.log(`end`);