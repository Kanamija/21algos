// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.


// declare a function singleNumbe tht wil take in an array 
// inside the f() we will decalre var and assign it = to empy obj that we will use as a lookup table 
// itterate over the array with a standard for loop 
/// each iteration we check if the number exists in the obj 
// if it doesnt we add it to the object with the value of 1 and the current value as key 
// if it does exist than we increment the value by one 
// once we exit the four loop we return the key whos value is = to 1 
// return object.keys().find()


// const counts = { a: 3, b: 1, c: 2 };

// const key = Object.keys(counts).find(k => counts[k] === 1);
// key === 'b'

// Input: nums = [4,1,2,1,2]

function singleNumber ( arr ) {
    const obj = {}; 
    for ( let i = 0 ; i < arr.length ; i++){
        if ( !obj[arr[i]] ){
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }

    }
    const key = Object.keys(obj).find(k => obj[k] === 1);
    return key;
};

console.log(singleNumber([4,1,2,1,2])); 