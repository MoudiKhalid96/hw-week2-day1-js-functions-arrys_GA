// To run any function, uncomment calling function starts from line 126.
// Exercise 1:
function summation(to_n) {
    var sum = 0;

    for (let index = 1; index <= to_n; index++) {
        sum += index;
    }

    return sum;
}

// Exercise 2:
function summationEven(summationEven) {

    if (summationEven % 2 == 0)
        return summationEven;
    else
        return summationEven + 1;
}

// Exercise 3:
function worsdWithA(arrayOfWords) {
    var arrayWithletterA = [];
    var counter = 0;

    for (let index = 0; index < arrayOfWords.length; index++) {

        if (arrayOfWords[index].includes("a") || arrayOfWords[index].includes("A")) {
            arrayWithletterA[counter] = arrayOfWords[index];
            counter++;
        }
    }

    return arrayWithletterA;
}

// Exercise 4:
function reverse(word) {
    var reverseWord = word.split(""); // create an array that contains chars of word
    reverseWord = reverseWord.reverse(); // reverse positions of each letter in the array
    reverseWord = reverseWord.join(""); // make it in a word/scentense again
    word = reverseWord;

    return word;
}

// Exercise 5:
function addDashes(arrayOfWords) {

    for (let index = 0; index < arrayOfWords.length; index++) {

        if (!(index + 1 == arrayOfWords.length))
            arrayOfWords[index] = arrayOfWords[index].concat("-");
    }

    arrayOfWords = arrayOfWords.join("");

    return arrayOfWords;

}


// Exercise 6:
function countUpAndDown(num) {
    length = num + (num - 1);

    console.log(length)
    var count = "";

    for (let index = 1; index <= length; index++) {
        if (num <= index && num != 0) {
            count += num + " ";
            num--;
        } else {
            count += index + " ";
        }
    }
    return count;
}

// Exercise 7:
function avg(arrayOfNumbers) {
    var sum = 0;

    for (let index = 0; index < arrayOfNumbers.length; index++) {
        sum += arrayOfNumbers[index];
    }

    var avg = sum / arrayOfNumbers.length;

    return avg;
}

// Exercise 8:
function wordsWithLetter(letter, arrayOfWords) {
    var arrayWithletter = [];
    var counter = 0;

    for (let index = 0; index < arrayOfWords.length; index++) {

        if (arrayOfWords[index].includes(letter)) {
            arrayWithletter[counter] = arrayOfWords[index];
            counter++;
        }
    }

    return arrayWithletter;

}

// Exercise 9:
function largestEvenNumber(arrayOfNumbers) {
    var largest = 0;

    for (let index = 0; index < arrayOfNumbers.length; index++) {
        if (arrayOfNumbers[index] % 2 == 0) {
            if (largest < arrayOfNumbers[index])
                largest = arrayOfNumbers[index];
        }
    }

    return largest;
}

// Exercise 1 result:
// console.log("Sum = " + summation(10));

// Exercise 2 result:
// console.log(summationEven(1));

// Exercise 3 result:
// var animals_Ex3 = ['cat', 'rabbit', 'dog', 'frog'];
// console.log(worsdWithA(animals_Ex3));

// Exercise 4 result:
// console.log(reverse("Moudi Khalid"));

// Exercise 5 result:
// var tests = ['test1', 'test2', 'test3'];
// console.log(addDashes(tests))

// Exercise 6 result:
// console.log(countUpAndDown(3));

// Exercise 7 result:
// var arrayOfNumbers = [8, 2, 2, 4];
// console.log(avg(arrayOfNumbers));

// Exercise 8 result:
// var animals_Ex8 = ['cat', 'rabbit', 'dog', 'frog'];
// console.log(wordsWithLetter("g", animals_Ex8));

// Exercise 9 result:
// var arrayOfNumbers_Ex9 = [1, 2, 3, 10, 4, 7, 0];
// console.log(largestEvenNumber(arrayOfNumbers_Ex9));