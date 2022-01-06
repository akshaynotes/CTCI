// CHAPTER 1 - Arrays and Strings

// 1.1 Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const allUnique = (str) => { 
  const arr = str.split(""); 
  const firstChar = str[0];
  const found = [];
  for (let i = 0; i < arr.length; i++) {
    if (found.includes(arr[i])) {
      return false;
    }
    found.push(arr[i]);
  }
  return true;
};

// ASCI can be used to create hash table


// 1.2 Implement a function void reverse(char* str) in C or C++ which reverses a null-terminated string.

const swap = (arr, start, end) => {
    let s = arr[start];
    arr[start] = arr[end];
    arr[end] = s;
}

const reverseStr = (str) => { 
    let arr = str.split('');
    let start = 0;
    let end = str.length - 1; 

    while(start < end){
        swap(arr, start, end);
        start++;
        end--;
    }

    // let middle = str.length / 2;
    // for(let i = 0; i < middle; i++){
    //     s = arr[start];
    //     arr[start] = arr[end];
    //     arr[end] = s;
    //     start++;
    //     end--;
    // }; 

    let result = arr.join('');
    return result;
};

// 1.3 Given two strings, write a method to decide if one is a permutation of the other.

const isPerm = (s, t) => {
  s = s.split("");
  t = t.split("");
  for (let i = 0; i < s.length; i++) {
    if (!t.includes(s[i])) {
      return false;
    } else {
      let ind = t.indexOf(s[i]);
      t.splice(ind, 1);
    }
  } 

  if (t.length > 0) {
    return false;
  }
  return true;
};

// 1.4 Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end of the string to hold the additional characters, and that you are given the "true" length of the string. (Note: if implementing in Java, please use a character array so that you can perform this operation in place.)
// Ex: Input: "Mr John Smith"
// Output: "Mr%20John%20Smith"

const replaceSpaces = (str) => {
    return str.split(' ').join('%20');
};

// 1.5 Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string.

// Input: aabcccccaaa
// Output: a2b1c5a3 

// if unique character count x2 <= characters return characters. Ex: aabbccde
const compress = (str) => {
    let arr = str.split('');
    let result = [arr[0]]; 
    let count = 0;
    for(let i = 1; i <= arr.length; i++){
        if(result[result.length-1] !== arr[i] && arr[i] !== undefined){
            count++;
            result.push(count);
            result.push(arr[i]);
            count = 0;
        } else if(result[result.length-1] !== arr[i] && arr[i] === undefined){
            count++;
            result.push(count); 
            count = 0;
        } else if(result[result.length-1] === arr[i]) {
            count++;
        }
    }

    if(arr.length > result.length){
        return result.join('');
    } else {
        return arr.join('');
    };
}

const compress = (str) => {
    let arr = str.split('');
    let obj = {};
    for(let i = 0; i < arr.length; i++){
       if(obj[arr[i]] >= 1){ 
           obj[arr[i]] = obj[arr[i]] + 1;
       } else {
           obj[arr[i]] = 1;
       }
    }
    const allKeys = Object.keys(obj);
    let result = [];
    for(let i = 0; i < allKeys.length; i++){
        result.push(allKeys[i])
        result.push(obj[allKeys[i]])
    }
    
    if(arr.length > result.length){
        return result.join('');
    } else {
        return arr.join('');
    };
}

// 1.6 Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
// Source: https://codereview.stackexchange.com/questions/186805/rotate-an-n-%C3%97-n-matrix-90-degrees-clockwise
var rotate = function(matrix) {
    // Copy the original matrix
    var origMatrix = matrix.slice(); // - apparently slice() is a way to copy an array into another!
    for(var i=0; i < matrix.length; i++) { // - we'll need to pass every row into our matrix using i
        // Map each row entry to its rotated value
        var row = matrix[i].map(function(x, j) { // x remains 'a', j iterates - 0,1,2,3
            var k = (matrix.length - 1) - j; // k = 3,2,1,then 0
            return origMatrix[k][i]; // this represents a letter 'd' then 'c','b','a'
        });
        matrix[i] = row;
    }
    return matrix;
};

/* 
Ex: 
rotate([
    ["a", "a", "a", "a"],
    ["b", "b", "b", "b"],
    ["c", "c", "c", "c"],
    ["d", "d", "d", "d"]
])
*/

// 1.7 Write an algorithm such that if an element in an MxM matrix is 0, its entire row and column are set to 0.

/*
pseudo code - 
a. write function that fills horizontal array. input: whole array, array#. Output: new array with elements at array#.
b. write function that fills vertical array. input: whole array, array#, position. Output: new array with elements at position.
c. write function to find incidents of 0, if 0 is found replace it with letter A.
d. once entire array is looped call the 2 functions defined above at positions where A is found
*/

const fillHoriz = (arr, arrPos) => {}
const fillVert = (arr, arrPos, pos) => {}
const matrixFill = (arr) => {}




// 1.8 Assume you have a method isSubstring which checks if one word is a sustring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is rotation of "erbottlewat").
