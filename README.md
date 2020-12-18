# JS Functions Week2 Homework1

## Instructions
1. Fork and clone this repository.
2. cd into the new directory
3. Create a file called solution.js and add all answers to it. 
---

#### Exercise 1:
Where can you print out the value of variable c without resulting in an error?

```js
var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();
```
1. anywhere in the script! 
2. anywhere inside the function `x()` 
3. anywhere inside the function `y()` 
4. anywhere inside the function `z()`

### Choose the correct answer

---

#### Exercise 2: Dice Roller
- Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
- Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
- BONUS: have your function take an argument of the # of dice to be rolled.
- Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`
---

#### Exercise 3: currencyConverter(currency, amount)
  - Write a function `currencyConverter` that takes two arguments an amount and a currency (USD, GBP, EGP, BD) and returns  the converted version of the amount in Riyals. 
  - Use the if-then-else construct available in Javascript.
**Hint :**
> - 1 Riyal = 4.68 Egyptian pound 
> - 1 Riyal = 0.10 Bahraini dinar
---


#### Exercise 4: isCharacterAVowel(character)
  - Write a function `isCharacterAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
---
# JS Arrays and Loops Week2 Homework1

#### Exercise 1:
Create a function that will get the sum of the numbers between 1 and n and return the answer

```
summation(5) // should return 15 because 1+2+3+4+5=15
```

#### Exercise 2:
Create a program to get the sum of all the even numbers in a group

```
 summationEven(5) // should return 6 because 2+4=6
```

 

#### Exercise 3:  
Write a function that will tell you all of the words in an array that contain the letter `a`

```
 wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']
```

 
#### Exercise 4: 
Create a function to reverse the letters in a word

```
reverse("caterpillar") // should return "rallipretac"
```



#### Exercise 5:
 Create a function that takes an array of words and combines them with a dash

  ```
  addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
  ```
 ## Extra Practice Optional 6,7,8,9,10
#### Exercise 6:
Function that will count up to a number and back down and return a string of the climb

```
 countUpAndDown(3) // should return "1 2 3 2 1"
```

#### Exercise 7:
Create a function to get the average of a group of numbers 

```
  avg([8, 2, 2, 4]) // should return 4
 ```

#### Exercise 8: 
Write a function that will tell you all of the words in an array that contain a specified letter

```
 wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']
```

#### Exercise 9: 
Function that returns the longest word in sentence

 ```
longestWord("The cat in the house") // should return "house"
```
#### Exercise 10: 
Function that returns the largest even number

```
 largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
```


### Deliverable  
1. When finished, `git add .`, `git commit -m " "`, `git push origin master` to your fork and submit a pull request.
2. Please fill up the following questions when you pull request:
- on a scale from 1 to 5, how comfortable were you with this assignment? (1 is very difficult)
- How long did it take?
- What was a challenge you had with this assignment?
- Is there anything that you'd like some further information on?
- Do you have any suggestions to improve this assignment?
