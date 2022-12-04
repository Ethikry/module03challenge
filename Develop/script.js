// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function characterSelect() {
  let yOpt = /y/i;
  let nOpt = /n/i;
  var options = ["lowercase", "uppercase", "numeric", "special"];
  var selections = [];
  var i = 0;

  while (i < 4) {
    let charSelect = prompt(
      "Include " + options[i] + " characters? (Y/N)",
      "Y"
    );
    if (yOpt.test(charSelect)) {
      var special = true;
      selections.push(special);
    } else if (nOpt.test(charSelect)) {
      var special = false;
      selections.push(special);
    } else {
      alert("Invalid selection; please type Y or N");
    }
    i++;
  }
  return selections;
}

function generatePassword() {
  let passLength = prompt("Desired password length?", "8");
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Invalid password length");
    return;
  }
  var characterSelections = characterSelect();
  var options = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "~!@#$%^&*()_+<>?-=",
  ];
  let charactersInUse = "";
  let x = 0;
  while (x < 4) {
    if (characterSelections[x]) {
      charactersInUse = charactersInUse.concat(options[x]);
    }
    x++;
  }
  var charactersLength = charactersInUse.length;
  var result = "";
  for (var i = 0; i < passLength; i++) {
    result += charactersInUse.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  return result;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
