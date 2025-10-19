const nums = [1, 2, 3, 4]

function runningSum(nums) {
    let sum = 0;
    return nums.map(num => sum += num);
}
console.log(runningSum(nums))