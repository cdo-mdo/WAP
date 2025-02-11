function secondLargest(nums: number[]): number | null {
    if (nums.length < 2) {
        return null;
    }
    
    let largest = -Infinity;
    let secondLargestNum = -Infinity;
    for (const num of nums) {
        if (num >= largest) {
            secondLargestNum = largest;
            largest = num;
        }
        else if (num >= secondLargestNum) {
            secondLargestNum = num;
        }
    }

    return secondLargestNum;
}

console.log(secondLargest([120, 23, 34, 210, 34, 5, 6]));

////////////////////////////////////////

const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1);

console.log(arr1.map(item => item * item));
console.log(arr1.filter(item => item % 2 == 0));