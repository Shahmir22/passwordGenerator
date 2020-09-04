// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//1st click function -done
//2nd prompt for password criteria -done
//3rd validate password criteria for generator -done
//4th generate password and display

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function for getting a random element from an array
function getRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex];

    return randomElement;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    // all your code goes here
    var length = prompt("How long do you want your password?");

    if (length < 8) {
        alert("Your password must be more than 8 characters.");
        return;
    }

    if (length > 128) {
        alert("Your password must be less than 128 characters.");
        return;
    }

    var hasLowercase = confirm("Click OK to include lowercase characters in your password");
    var hasUppercase = confirm("Click OK to include Uppercase characters in your password");
    var hasSpecial = confirm("Click OK to include Special characters in your password");
    var hasNumber = confirm("Click OK to include Number characters in your password");

    if (
        hasLowercase === false &&
        hasUppercase === false &&
        hasSpecial === false &&
        hasNumber === false
    ) {
        alert("You must select at least one character type.");
        return;
    }

    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];

    if (hasLowercase) {
        possibleCharacters = possibleCharacters.concat(lowercase);
        // guaranteedCharacters.push(getRandom(lowercase));
    }

    if (hasUppercase) {
        possibleCharacters = possibleCharacters.concat(uppercase);
        // guaranteedCharacters.push(getRandom(uppercase));
    }

    if (hasSpecial) {
        possibleCharacters = possibleCharacters.concat(special);
        //guaranteedCharacters.push(getRandom(special));
    }

    if (hasNumber) {
        possibleCharacters = possibleCharacters.concat(number);
        // guaranteedCharacters.push(number);
    }

    for (var i = 0; i < length; i++) {
        var mixer = Math.floor(Math.random() * possibleCharacters.length);
        guaranteedCharacters = guaranteedCharacters + possibleCharacters[mixer];


    }
    return guaranteedCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
