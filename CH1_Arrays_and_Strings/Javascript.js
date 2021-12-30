// CHAPTER 1 - Arrays and Strings

// 1.1 Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const uniqueChar = (str) => {
  const arr = str.split("");
  const firstChar = str[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== firstChar) {
      return false;
    }
  }
  return true;
};

// 1.2 Implement a function void reverse(char* str) in C or C++ which reverses a null-terminated string.

const reverseStr = (str) => { 
    let arr = str.split('');
    let middle = str.length / 2;
    let start = 0;
    let end = str.length - 1;
    let s;
    for(let i = 0; i < middle; i++){
        s = arr[start];
        arr[start] = arr[end];
        arr[end] = s;
        start++;
        end--;
    };

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

// 1.5 Implement a method to perform basic string compression usingthe counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string.

// 1.6 Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

// 1.7 Write an algorithm such that if an element in an MxM matrix is 0, its entire row and column are set to 0.

// 1.8 Assume you have a method isSubstring which checks if one word is a sustring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is rotation of "erbottlewat").
