//Write a function named twoSum which takes two parameters: nums and target. Given an
// array of integer nums and an integer target, return indices of the two numbers such 
//that they add up to the target. You may assume that each input would have exactly one
// solution, and you may not use the same element twice.
//You can return the answer in any order

let nums=[2,8,3];
let target=10;
function twoSum(nums, target){
    let output=[];
    for(let i=0; i< nums.length; i++){
    for (let j=i+1; j< nums.length; j++){
        if (nums[i]+nums[j]=== target){
            output.push(nums[i]);
            output.push(nums[j]);
        }
    }
    }
    return output;
}

let result =twoSum(nums,target);
console.log(result);