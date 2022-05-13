// Assignment code here


function generatePassword(){

//Define variables
//let numbers " 1234567890"
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//let letters uppercase "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let upperCaseCharacters = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
//let letters lowercase "abcdefghijklmnopqrstuvwxyz"
let lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//let special characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
let specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '`', '{', '|', '}', '~'];
}
//let length equal 8 to 128 characters
//ask length
let length = prompt ("How many characters should the password be, between 8 and 128?");
//ask if letters uppercase
let uppercase = confirm ("You want upper case letters in your password?");
//ask if letters lowercase
let lowercase = confirm ("You want lower case letters in your password?");
//ask if numbers
let numeric = confirm ("You want numbers in your password?");
//ask if special characters
let special = confirm ("You want special characters in your password?");

//function for getting random element form an array
function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * resultArray.length);
  let randElement = arr[randIndex];

  return randElement;
}



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// let generateBtn = document.querySelector('#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
