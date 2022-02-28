// Assignment code here
//Define variables
//let numbers " 1234567890"
let numericCharacters = ['0'. '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//let letters uppercase "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let upperCasedCharacters = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
//let letters lowercase "abcdefghijklmnopqrstuvwxyz"
let lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//let special characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
let specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
//let length equal 8 to 128 characters
//ask length
//ask if letters uppercase
//ask if letters lowercase
//ask if numbers
//ask if special characters

//function for getting random element form an array
function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}


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
