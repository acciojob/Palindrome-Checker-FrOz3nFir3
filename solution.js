// complete the given function

function palindrome(str){
   // brute force approach
  let stringArray = str.split("");
  // reversing characters
  stringArray.reverse();
  
  // palindrome is same as forward and backwards
  return stringArray.join("") == str;
}
module.exports = palindrome
