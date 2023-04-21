var lowercaseString = "abcdefghijklmnopqrstuvwxyz"
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericString = "0123456789"
var specialcharacterString = "!@#$%^&*"


var superString = ""


function getRandomNumber(min, max) {
  var randomNumber=Math.random() // Random number between 0 and 0.99
  var randomNumberUpToMax=randomNumber * max // Random number between 0 and max - 0.1
  var randomNumberInRange= min + randomNumberUpToMax;
  return Math.floor(randomNumberInRange); // Remove the decimal places
}

function getRandomValueFromArray(array) {
  var randomArrayPosition=getRandomNumber(0,array.length);
  return array[randomArrayPosition];
}


function generatePassword() {
  var passwordLength = prompt("Choose password length between 8 to 128.")
  console.log("This is the password length!", passwordLength)
  var lowerCase = confirm("include Lowercases?");
  console.log("lowercase: ", lowerCase)
  var upperCase = confirm("include Uppercases?");
  console.log("uppercase: ", upperCase)
  var numEric = confirm("include numbers?");
  console.log("numerics: ", numEric)
  var specialCharacters = confirm("include special characters?");
  console.log("special characters: ", specialCharacters)
  
  if (lowerCase) {
    superString=superString+getRandomValueFromArray(lowercaseString) 
      console.log(superString)

};

if (upperCase) {
  superString=superString+getRandomValueFromArray(uppercaseString) 
    console.log(superString)

};


if (numEric) {
  superString=superString+getRandomValueFromArray(numericString) 
    console.log(superString)

};

if (specialCharacters) {
  superString=superString+getRandomValueFromArray(specialcharacterString) 
    console.log(superString)

};

for(var i=0;i<passwordLength;i++) {
  
}


}













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
