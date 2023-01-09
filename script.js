// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//init variables
var passwordArray = [];
var pLength = 0;
var tempArray = [];

// Function to prompt user for password options
function getPasswordOptions() {

  //Prompt for Password length between 10 and 64.
  pLength = parseInt(
  prompt("Enter the length of the password between 10 and 64.")
  );

  //Validate input if invalid, user must hit generate password again
  if (pLength < 10 || pLength > 64 || isNaN(pLength)) {
    alert ("You did not enter a number between 10 and 64, please try again");
    return false;
  };

  //Confirm for special characters
  var pSpecial = confirm("Click OK to include special characters.");
  if (pSpecial == true){
    (passwordArray = passwordArray.concat(specialCharacters));
  };

  //Confirm for numbers
  var pNumbers = confirm("Click OK to include numbers.");
  if (pNumbers == true){
    (passwordArray = passwordArray.concat(numericCharacters));
  };

  //Confirm for lower case characters
  var pLower = confirm("Click OK to include lower case characters.");
 if (pLower == true){
    (passwordArray = passwordArray.concat(lowerCasedCharacters));
  };

  //Confirm for upper case characters
  var pUpper = confirm("Click OK to include upper case characters.");
   if (pUpper == true){
    (passwordArray = passwordArray.concat(upperCasedCharacters));
  };

  //console.log (pLength, pSpecial, pNumbers, pLower, pUpper); // expected num, bool, bool, bool
  console.log ("Initial: " + (passwordArray));
  //console.log ("password array length " + (passwordArray.length));


  return;
}

// Fisher yates algorithim to shuffle password array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Function for getting a random element from an array
function getRandom(arr) {

  for (var i = 0; i < pLength; i++) {

// random element from passwordArray
    let randomIndex = Math.floor(Math.random() * passwordArray.length);
    tempArray.push(passwordArray[randomIndex]);
    console.log ("password elements " + (tempArray));
    
  }
  
return;
}

// Function to generate password with user input
function generatePassword() {

  getPasswordOptions();
  shuffle(passwordArray);
  console.log("shuffled: " + (passwordArray));
  getRandom();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

   //join removes , from array
  var password = (tempArray.join(""));

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);