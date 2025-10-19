//Remove Duplicates from Sorted Array
//removing duplicates from the sorted array, where we will be fixing the first value and modifying the next position of the array when a unique value is appeared.

function removeDuplicate(nums){
    if(nums.length===0) return 0;
    let i=0;
    for (let j=1;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1
}
let nums=[0,0,1,2,2,3,3,4]
let k=removeDuplicate(nums)
console.log(nums.slice(0,k))