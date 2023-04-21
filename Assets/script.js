var lowercaseString = "abcdefghijklmnopqrstuvwxyz"
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericString = "0123456789"
var specialcharacterString = "!@#$%^&*"


var superString = ""


function getRandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUpToMax = randomNumber * max
  var randomNumberInRange = min + randomNumberUpToMax;
  return Math.floor(randomNumberInRange);
}

function getRandomValueFromArray(array) {
  var randomArrayPosition = getRandomNumber(0, array.length);
  return array[randomArrayPosition];
}


function generatePassword() {
  var passwordLength = prompt("Choose password length between 8 to 128.")
  console.log("This is the password length!", passwordLength)
  while(passwordLength<8 || passwordLength>128){
    passwordLength = prompt("Invalid password length, please choose length between 8 to 128.")
  }

  var lowerCase = confirm("include Lowercases?");
  console.log("lowercase: ", lowerCase)
  var upperCase = confirm("include Uppercases?");
  console.log("uppercase: ", upperCase)
  var numEric = confirm("include numbers?");
  console.log("numerics: ", numEric)
  var specialCharacters = confirm("include special characters?");
  console.log("special characters: ", specialCharacters)

  if (!lowerCase && !upperCase && !numEric && !specialCharacters) {
    alert("You must choose characters for the password!")
    generatePassword()
  };

  superString = ""

  while (superString.length < passwordLength) {
    if (superString.length == passwordLength) {
      break;
    };
    if (lowerCase) {
      superString = superString + getRandomValueFromArray(lowercaseString)
    };
    if (superString.length == passwordLength) {
      break;
    };
    if (upperCase) {
      superString = superString + getRandomValueFromArray(uppercaseString)
    };
    if (superString.length == passwordLength) {
      break;
    };
    if (numEric) {
      superString = superString + getRandomValueFromArray(numericString)
    };
    if (superString.length == passwordLength) {
      break;
    };
    if (specialCharacters) {
      superString = superString + getRandomValueFromArray(specialcharacterString)
      
    };
  }
  return superString
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
