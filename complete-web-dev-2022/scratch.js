let numList = [1,3,5,6,7,9];
let targetNumber = 3;

let searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        mid = Math.floor((left + right)/2);
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid -1;
        } else {
            left = mid + 1;
        }
    }
    return target > nums[left] ? left+1 : left;
}

console.log(searchInsert(numList, targetNumber));