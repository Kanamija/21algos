// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

 

 

 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?


//declare a function called missing number that takes an array
//declare a variable and set it to the sorted input array
//output is a number
//iterate over the array using standard for loop
//on each iteration see if the value is equal to the previous position + 1
//if the value is different then we will return the previous value plus 1

function missingNumber (array) {
    const newArr = array.sort();
    for (let i = 1; i < array.length; i++) {
       const currNum = (newArr[i - 1] + 1); 
       console.log('currNum:', currNum)
        if (newArr[i] !== currNum) {
            return (newArr[i - 1] + 1);
        }
    }
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))