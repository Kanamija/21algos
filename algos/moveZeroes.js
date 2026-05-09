// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

//create functin takes in an arrary and output an array 
// create a let var count 
//iterate through the input array
//for every element were going to check to see if it is 0 
// if it is 0 were going to increment count var and splice out current el .
//if not continue iterating 
//ouside the for loop
// using while loop 
// push as many 0s to the array as exist in count 
// then return array. 

function delTaco(array) {
    let count = 0 ; 

    for ( let i = 0 ; i < array.length ; i++) { 
        if ( array[i] === 0 ){
            count++;
            array.splice(i,1);
        }
    }
    
    while( count > 0 ){
        array.push(0); 
        count --;
    }
    return array; 
}


const nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]


const nums2 = [0]
//Output: [0]


console.log(delTaco(nums));
console.log(delTaco(nums2));