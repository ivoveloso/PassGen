var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

var passwordTxt = document.getElementById("password");
var generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
  let characters = alpha;
  if  (confirm("Do you want numbers? e.g. 0123456789") == true) {
    var incNumbers = true;
  } else {
    var incNumbers = false;
  }
  console.log(incNumbers);
  if  (confirm("Do you want symbols? e.g: @#$%^&*_-+=") == true) {
    var incSymbols = true;
  } else {
    var incSymbols = false;
  }
  
  var lengthtxt = prompt("Enter length of password.", "16");
  var length = parseInt(lengthtxt);
  console.log(length);

  incNumbers ? (characters += numbers) : "";
  incSymbols ? (characters += symbols) : "";

  passwordTxt.value = generatePassword(length, characters);
});

var generatePassword = (length, characters) => {
  let password = "";
  for (i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};