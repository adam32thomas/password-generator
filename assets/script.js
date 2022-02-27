// Assignment code here
//Define variables
//let numbers " 1234567890"
//let letters uppercase "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//let letters lowercase "abcdefghijklmnopqrstuvwxyz"
//let special characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
//let length equal 8 to 128 characters
//ask length
//ask if letters uppercase
//ask if letters lowercase
//ask if numbers
//ask if special characters


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
