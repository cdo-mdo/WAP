function secondLargest(nums: number[]): number | null {
    if (nums.length < 2) {
        return null;
    }

    let largest = -Infinity;
    let secondLargest = - Infinity;
    for(let num of nums) {
        if (num >= largest) {
            secondLargest = largest;
            largest = num;
        } else if (num >= secondLargest) {
            secondLargest = num;
        }
    }
    return secondLargest == -Infinity ? null : secondLargest;

}

console.log(secondLargest([12, 3, 4, 5, 4, 6, 7, 32]));
