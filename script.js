var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var genPass = document.getElementById('genPass');
console.log(genPass);
var passwordUpdated = [];
const password = document.querySelector("#password");

function generatePassword() {
  var passwordLength = prompt("Please make a password at least 8 characters long and not more than 128");
  console.log("passwordLength");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please make sure that the password is between 8 and 128 characters");
    return;
  }

  var Lowercasechar = confirm('Would you like to include lowercase characters into a password?');
  var Uppercasechar = confirm('Would you like to include uppercase characters into a password?');
  var numericChar = confirm('Would you like to include numeric characters into a password?');
  var specialChar = confirm('Would you like to include special case characters into a password?');

  if (!Lowercasechar && !Uppercasechar && !numericChar && !specialChar) {
    alert('Please choose at least one character set among offered');
    return;
  }

  var combinedChar = [];

  if (Lowercasechar) {
    combinedChar = combinedChar.concat(lowerCasedCharacters);
  }
  if (Uppercasechar) {
    combinedChar = combinedChar.concat(upperCasedCharacters);
  }
  if (numericChar) {
    combinedChar = combinedChar.concat(numericCharacters);
  }
  if (specialChar) {
    combinedChar = combinedChar.concat(specialCharacters);
  }

  console.log(combinedChar);

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomizedIndex = Math.floor(Math.random() * combinedChar.length);
    generatedPassword += combinedChar[randomizedIndex];
  }

  password.value = generatedPassword;
}

genPass.addEventListener("click", generatePassword);
