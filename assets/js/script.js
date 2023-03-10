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

  // Prompt user for criteria
  let length = parseInt(prompt('How long do you want your password to be? (Between 8 and 128 characters)'))
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Invalid password length! Please enter a number between 8 and 128.')
    return ''
  }


let useLowCase = confirm('Use lowercase letters?')
let useUpCase = confirm('Use uppercase letters?')
let useNumbers = confirm('Use numeric characters?')
let useSpecial = confirm ('Use special characters?')

if (!useLowCase && !useUpCase && !useNumbers && !useSpecial) {
  alert('You must select at least one character type!')
  return ''
}

// build character set to use based on user input
let chars = ''
if (useLowCase) {
  chars += lowCaseChars
}
if (useUpCase) {
  chars += upCaseChars
}
if (useNumbers) {
chars += numberChars
}
if (useSpecial) {
chars += specialChars
}
}
