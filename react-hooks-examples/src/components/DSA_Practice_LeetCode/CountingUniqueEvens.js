function uniqueEven(arr) {
    if (arr.length === 0) return 0;
    let nums = arr.filter(a=>a % 2 == 0)
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return (nums.slice(0,i+1))
}
const array=[1,2,2,3,3,3,3,4,4,6,6,8,8,8]
console.log(uniqueEven(array))