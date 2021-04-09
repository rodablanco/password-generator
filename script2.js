// Assignment Code
var generateBtn = document.querySelector("#generate");
var alpha = 'abcdefghijklmnopqrstuvwxyz';
var upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var character = '!@#$%^&*=-_';

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmAlwaysLetters;
var choices;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
    ps = writePassword();
    document.getElementById("password").placeholder = ps;
});

//start function to generate password
function generatePassword() {
    //User input
    enter = parseInt(prompt("Choose how many characters you would like your password to be. Must be between 8 and 128."));
    //user validation
    if (!enter) {
        alert("This needs a value");
    
    } else if (enter < 8  || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else{
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
    };

    //negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase) {
        choices = alert("Must pick parameters");
    } 
   
    else if ( confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(numbers, alpha, character, upperAlpha)
    } else if (confirmCharacter && confirmNumber && confirmAlwaysLetters) {
        choices = character.concat(number, alpha, character)
    } 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);
    }
    else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);
    }
    else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upperAlpha);
    };

    //placeholder for user generated length
    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices [Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
//joins the password array and converts it to string
    var ps = password.join("");
    UserInput(ps);
    return ps;

    //changes function to textbox
    function UserInput(ps) {
        document.getElementById("password").textContent = ps;
    }
    
}