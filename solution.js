// complete the given function

function palindrome(string){
  // optimized approach O(N) Time and O(1) Space
  let lowerCased = string.toLowerCase();

  let startingPointer = 0;
  let endingPointer = lowerCased.length -1;

  // palindrome is same as forward and backwards thus checking first character and last character and repeating simultaneously for other part of the strings.
  while(startingPointer < endingPointer){
    let currentStartingCharacter = lowerCased[startingPointer];
    let currentEndingCharacter = lowerCased[endingPointer];
     
    if(currentStartingCharacter != currentEndingCharacter) return false;
     
    startingPointer++;
    endingPointer--;
  }

  return true;
}
module.exports = palindrome
