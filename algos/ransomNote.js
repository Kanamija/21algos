// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

//declare function passing in two arguments, ransomNote and magazine
//output: boolean
//instantiate boolean first and set to false
//instantiate an object and set it to an empty object
//iterate over magazine if element exists in object, then we increment the value
//if element does not exist, we are going to add it and set the value to 1
//iterate over ransom note and for each element we are going to check if the element exists in the object
//if it doesn't exist return false
//if object at key of element is zero return false
//if it exists we decrement
//if we make it through the entire array we return true


function ransomNote(note, magazine) {
    const cache = {};
    for (let i = 0; i < magazine.length; i++) {
        const element = magazine[i];
        if (cache[element]) {
            cache[element]++
        } else {
            cache[element] = 1
        }
    }
    console.log('cache in middle', cache)
    for (let i = 0; i < note.length; i++) {
        const element = note[i];
        if (!cache[element]) {
            return false
        }
        if (cache[element] === 0) {
            return false
        } 
        cache[element]--
    }
    console.log('cache at end', cache);
    return true;
}

console.log(ransomNote("a", "b"));
//expected: false
console.log(ransomNote("aa", "ab"));
//expected: false
console.log(ransomNote("aa", "aab"));
//expected: true