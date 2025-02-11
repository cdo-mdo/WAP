function sum1(...nums): number {
    console.log(nums);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log(sum1(1, 2, 3, 4));

function sum2(...nums): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum2(1, 2, 3, 4));