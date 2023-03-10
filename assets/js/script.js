// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Define character sets
  let lowCaseChars = 'abcdefghijklmnopqrstuvwxyz'
  let upCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numberChars = '0123456789'
  let specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}
