// To run any function, uncomment calling function starts from line 52.
// Exercise 2: Dice roller
function rollDise(times) {
    var roll = [];
    var sum = 0;

    for (let index = 0; index < times; index++) {
        roll[index] = parseInt(6 * Math.random()) + 1;
        sum += roll[index]
        // console.log(roll[index]);
    }

    return sum;
}

// Exercise 3: Currency converter
function currencyConverter(amount, currency) {
    let afterConvert;

    if (currency === "UDS") {
        afterConvert = amount * 0.266667;
        console.log(amount + " Riyal = " + afterConvert + " in United state dollar");

    } else if (currency === "GBP") {
        afterConvert = amount * 0.197207;
        console.log(amount + " Riyal = " + afterConvert + " in British pound sterling");

    } else if (currency === "EGP") {
        afterConvert = amount * 4.16522;
        console.log(amount + " Riyal = " + afterConvert + " in Egyptian pound");

    } else if (currency === "BD") {
        afterConvert = amount * 0.100267;
        console.log(amount + " Riyal = " + afterConvert + " in Bahraini dinar");

    } else {
        console.log("invalid");
    }//end if else statement.

}

// Exercise 4: Is vharacter a vowel or not?
function isCharacterAVowel(character) {
    character = character.charAt(0);

    if (character.toLowerCase() === 'a' || character.toLowerCase() === 'u' || character.toLowerCase() === 'i' || character.toLowerCase() === 'o' || character.toLowerCase() === 'e')
        return true;

    return false;
}

// Exercise 2 result:
// console.log("Summation = " + rollDise(3));

// Exercise 3 result:
// currencyConverter(100, "EGP");

// Exercise 4 result:
// console.log(isCharacterAVowel("Moudi"));
