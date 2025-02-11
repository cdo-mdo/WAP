function work(milliseconds: number): void {
    let startTime: number = Date.now();
    let finishTime: number = startTime + milliseconds;
    while (startTime < finishTime) {
        startTime = Date.now();
    }
}

console.log(`start`);
work(2000);
console.log(`end`);