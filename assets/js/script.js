// Assignment code here
let generateBtn = document.querySelector("#generate");

let numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let uppercaseChar = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
let lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '`', '{', '|', '}', '~'];

// //let length equal 8 to 128 characters
// //ask length
function generatePassword(){
let length = prompt ("How many characters should the password be, between 8 and 128?");
  if (length < 8) {
    prompt ("Too few characters!");
  }
  if (length > 128) {
    prompt ("Too many characters!");
  }
  else {
    localStorage.setItem("length", password);
  } 
//ask if letters uppercase
let uppercase = confirm ("Include upper case letters in your password?");
//ask if letters lowercase
let lowercase = confirm ("Include lower case letters in your password?");
//ask if numbers
let numeric = confirm ("Include numbers in your password?");
//ask if special characters
let special = confirm ("Include special characters in your password?");
}
//function for getting random element from an array

// }
function getRandom(uppercaseChar) {
  let randIndex = Math.round(Math.random() * uppercaseChar.length);
  let randElement = arr[randIndex];

  return randElement;
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
