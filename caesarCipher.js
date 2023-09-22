function rot13(str) {
  let decoded = '';

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      let newCharCode = charCode + 13;
      if (newCharCode > 90) {
        newCharCode = newCharCode - 26;
      }
      decoded += String.fromCharCode(newCharCode);
    } else {
      // Non-alphabetic characters
      decoded += str[i];
    }
  }

  return decoded;
}

// Test the function
console.log(rot13("SERR PBQR PNZC"));  // Should return "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));    // Should return "FREE PIZZA!"
console.log(rot13("SERR YBIR?"));     // Should return "FREE LOVE?"
