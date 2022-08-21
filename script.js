
// Variables declaration
var alpha = "";
var alphalower = "abcdefghijklmnopqrstuvwxyz";
var alphaupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Variables associated with document elements to add and button to click
var passwordTxt = document.getElementById("password");
var generateBtn = document.getElementById("generate");

// Generate button click event listener
generateBtn.addEventListener("click", () => {
  let characters = alpha;

  // Prompt to ask for lower case characters
  if  (confirm("Do you want lower case characters? e.g. abcdefghijklmnopqrstuvwxyz") == true) {
    var incAlphalower = true;
  } else {
    var incAlphalower = false;
  }

  // Prompt to ask for upper case characters, all in UPPER case.
  if  (confirm("DO YOU WANT UPPER CASE CHARACTERS? e.g. ABCDEFGHIJKLMNOPQRSTUVWXYZ") == true) {
    var incAlphaupper = true;
  } else {
    var incAlphaupper = false;
  }

  // Prompt to ask for numbers
  if  (confirm("Do you want numbers? e.g. 0123456789") == true) {
    var incNumbers = true;
  } else {
    var incNumbers = false;
  }

  // Prompt to ask for symbols
  if  (confirm("Do you want symbols? e.g: @#$%^&*_-+=") == true) {
    var incSymbols = true;
  } else {
    var incSymbols = false;
  }
  
  // Prompt asking for length required. 
  var lengthtxt = prompt("Enter length of password. (Min: 8 Max 128)", "16");

  // Function to limit password length
  if (parseInt(lengthtxt) > 128) {
    var length = 128
  } else if (parseInt(lengthtxt) < 8) {
    var length = 8
  } else {
    var length = parseInt(lengthtxt);
  }

  console.log(length);

  // Tests for each variable to include or not the above characters  types
  incAlphaupper ? (characters += alphaupper) : "";
  incAlphalower ? (characters += alphalower) : "";
  incNumbers ? (characters += numbers) : "";
  incSymbols ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length, characters);
});

// Loop that interates through every character to return password as per options listed above.
var generatePassword = (length, characters) => {
  let password = "";
  for (i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};