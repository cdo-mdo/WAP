function work(milliseconds: number): void {
    let startTime: number = Date.now();
    let finishTime: number = startTime + milliseconds;
    let counter = 0;
    while (startTime < finishTime) {
        console.log(counter++);
        startTime = Date.now();
    }
}

console.log(`start`);
work(2000);
console.log(`end`);