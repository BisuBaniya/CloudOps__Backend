/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  str1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  str2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // If the lengths are not equal, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }
  
  // Sort the strings and compare
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  
  return sortedStr1 === sortedStr2;
}
module.exports = isAnagram;


