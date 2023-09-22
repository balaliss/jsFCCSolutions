function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Check if the cleaned string is a palindrome
  return cleanedStr === reversedStr;
}

// Test the function
console.log(isPalindrome("racecar")); // Should return true
console.log(isPalindrome("RaceCar")); // Should return true
console.log(isPalindrome("race CAR")); // Should return true
console.log(isPalindrome("2A3*3a2")); // Should return true
console.log(isPalindrome("2A3 3a2")); // Should return true
console.log(isPalindrome("2_A3*3#A2")); // Should return true
