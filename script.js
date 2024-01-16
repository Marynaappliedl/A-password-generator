var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var genPass = document.getElementById('genPass'); // I`m referring to the button element with an ID genPass from HTML
console.log(genPass); //I`m printing it in the console to debug 
var passwordUpdated = []; 
const password = document.querySelector("#password");//I`m selecting the password element in the HTML as I`ll be working further with it

function generatePassword() {
  var passwordLength = prompt("Please make a password at least 8 characters long and not more than 128");
  console.log("passwordLength");
  //I generate a password function that asks user to input a password between 8 and 128 char. He inputs a number into the window that has appeared

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please make sure that the password is between 8 and 128 characters");
    return;
    //If a password is not between 8 and 128 I stop the function by returning the statement that he should input a password between 8 and 128 characters
  }

  var Lowercasechar = confirm('Would you like to include lowercase characters into a password?');
  var Uppercasechar = confirm('Would you like to include uppercase characters into a password?');
  var numericChar = confirm('Would you like to include numeric characters into a password?');
  var specialChar = confirm('Would you like to include special case characters into a password?');
//Here I`m checking which arrays of special symbols and regular symbols the user wants
  if (!Lowercasechar && !Uppercasechar && !numericChar && !specialChar) {
    alert('Please choose at least one character set among offered');
    return;
    //Here I`m making sure the user selects at least one of the arrays of symbols otherwise the function just stops and asks to choose at least one type of characters
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
  //concatenate characters

  console.log(combinedChar);

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomizedIndex = Math.floor(Math.random() * combinedChar.length);
    generatedPassword += combinedChar[randomizedIndex];
  }

  password.value = generatedPassword;
}
//generate a password from randomized values
genPass.addEventListener("click", generatePassword);
//when a user clicks on the Event listener, the Generate function gets triggered and at the end we receive a randomized password