function secondLargest(nums: number[]): number {
    let largest: number = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }

    let secondLargest: number = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != largest && nums[i] > secondLargest) {
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}

const secondLargest1 = function(nums: number[]): number | null {
    if (nums.length < 2) {
        return null;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (const num of nums) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }
        else if (num > secondLargest) {
            secondLargest = num;
        }
    }
    return secondLargest == Infinity ? null : secondLargest;
}


console.log(secondLargest([20, 120, 111, 215, 54, 78]));
console.log(secondLargest1([20, 120, 111, 215, 54, 78]));