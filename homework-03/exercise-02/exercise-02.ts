function secondLargest(arr: number[]) {
    let largest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }

    let secondLargest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (secondLargest < arr[i] && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest([20, 120, 111, 215, 54, 78]));