// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.




// //define a function longestCommonPrefix //input: array   //output: string (empty or longest common prefix)
// const longestCommonPrefix = (stringArr) => {
//     //declare an output variable - starting value of an empty string
//     let output = ''

//     //remove the last element of the input array and store the removed element as a reference variable
//     const element = stringArr.pop()

//     //iterate through the input array using a standard for loop 
//     for(let i = 0; i < element.length; i++){
//         //create a variable to represent the current character - starting at the current index of the letter we are accessing in element
//         const char = element[i]

//         //nested loop - iterate over the input array 
//         for(let j = 0; j < stringArr.length; j++){
//             //
//             if(j === stringArr.length - 1 && char === stringArr[j][i]) {
//                 output += char
//             } else {
//                 return output;
//             }
//         }


//     }
        
// }
    




//define a function longestCommonPrefix //input: array   //output: string (empty or longest common prefix)
const longestCommonPrefix = (stringArr) => {
    //declare an output variable - starting value of an empty string
    let finalOutput = '';

    //remove the last element of the input array and store the removed element as a reference variable
    // const element = stringArr.pop()

    //iterate through the input array using a standard for loop 
    for (let i = 0; i < stringArr[0].length; i++) {
        const char = stringArr[0][i];

        for (let word of stringArr) {
            if(word[i] !== char) {
                return finalOutput;
            }
        }
        finalOutput += char;
    }
        return finalOutput
}




function longestCommonPrefix(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}