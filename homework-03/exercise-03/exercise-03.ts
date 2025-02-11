const nums = [1, 2, 3, 4, 5, 6];
console.log(nums);
const sqrNums = nums.map(num => num*num);
console.log(sqrNums);
const evenNums = nums.filter(num => num % 2 == 0);
console.log(evenNums);