//Remove Duplicates from Sorted Array
//removing duplicates from the sorted array, where we will be fixing the first value and modifying the next position of the array when a unique value is appeared.

function removeDuplicate(nums){
    if(nums.length===0) return 0;
    let i=0;//fixing first digit
    for (let j=1;j<nums.length;j++){
        if(nums[i]!==nums[j]){//checking if we find any other value other than fixed value
            i++;
            nums[i]=nums[j];//giving the unique value in the next position
        }
    }
    return i+1
}
let nums=[0,0,1,2,2,3,3,4]
let k=removeDuplicate(nums)
console.log(nums.slice(0,k))
//if we have unsorted array then we need to sort them first by using nums.sort((a,b)=>a-b), as direct sort will be sorting the array numbers converting them to string and make them sort lexographically, so 10 will be first than 2 as 1 is less than 2
//For ascending : nums.sort((a,b)=>a-b)
//for descending: nums.sort((a,b)=>b-a)
