//Create a function that will get the sum of the numbers between 1 and n and return the answer
function summation(num1){
    let sum = 0;
    
    for(let i=1 ; i<=num1 ; i++ ){
      sum += i;
    }//end for loop
    
    return sum;
  }//end summation function.
  
  //////////////////////////////////////////
  /*
   summationEven(5) // should return 6 because 2+4=6
  */
  //Create a program to get the sum of all the even numbers in a group
  function summationEven(num1){
    if(num1%2 == 1)
      num1++;
    
    return num1;
  }//end summation function.
  
  ///////////////////////////////////////
  
  
  //Exercise 3: Write a function that will tell you all of the words in an array that contain the letter a
  let animals = ['cat', 'rabbit', 'dog', 'frog'];
  function wordsWithA(arr){
    for(let i=0 ; i<arr.length ; i++){
      if(arr[i].indexOf('a') > -1)
        console.log(arr[i]);
      
    }//end for loop.
  }//end of wordsWithA function.
  
/////////////////////////////////////////  
//Exercise 4: Create a function to reverse the letters in a word

function reverse(arr){
    let reverseArray = [];
      
      for(let i=0 ; i<arr.length ; i++){
        var splitIt = arr[i].split('');
        var reverseIt = splitIt.reverse();
        var joinIt = reverseIt.join('');
        
        reverseArray[i] = joinIt;
        console.log(reverseArray[i]);
      }//end of for loop.
      
    }//end of reverse function.

/////////////////////////////////////////
//Create a function that takes an array of words and combines them with a dash 

let test = ['test1', 'test2', 'test3'];


function addDash(arr){
  let dashs = []
  let result = '';
  for(let i=0 ; i<arr.length ; i++){
        dashs[i] = arr[i];
    if(arr.length -1 != i)
    dashs[i] = arr[i] + "-";
    
        result += dashs[i];
  }
  
  return result;
}//end of addDash function

//////////////////////////////////////
//////////Extra Practice Optional//////////

//Exersice 6: Function that will count up to a number and back down and return a string of the climb

function countUpAndDown(num){
    let j = 1 ;
    let result = '';
    for(let i=num ; i>0 ; i--){
      for(; j<num ; j++){
        result += j + " ";
      }//end for loop1
      
      result += i + " ";
    }//end for loop2
    
    return result
  }//end of countUpAndDown function.

  ////////////////////////////////
  //Exercise 7:Create a function to get the average of a group of numbers
let numbers = [1, 2, 3, 4, 5, 6];
function avg(array){
  let length = array.length;
  let sum = 0;

  for(let i=0 ; i<length ; i++){
    sum +=array[i]
  }//end for loop
  
  let avg = sum / length;

  return avg
}//end of avg function

//////////////////////////////////////////////
//Exercise 8: Write a function that will tell you all of the words in an array that contain a specified letter

function wordWithLetter(letter, array){
    let words = [];
    let counter = 0;
    
    for(let i=0 ; i<array.length ; i++){
      if(array[i].includes(letter)){
        words[counter] = array[i];
        counter++;
      }
    }//end for loop
    
    return words;
  }//end of wordWithLetter function


  /////////////////////////////////////
  //Exercise 9:Function that returns the longest word in sentence
function longestWord(str){
    let split = str.split(" ");
    let longestWord = split[0];
    
    for(let i=0 ; i<split.length ; i++){
      if(longestWord.length < split[i].length){
        longestWord = split[i];
      }//end if statement 
    }//end for loop.
    return longestWord;
  }//end of longestWord function


  /////////////////////////////////
  //Exersice 10:Function that returns the largest even number
function largestEvenNumber(array){
    let large = array[0];
    
    for(let i=1 ; i<array.length ; i++){
      if(large < array[i]){
        large = array[i];
      }//end if statement 
      
    }//end for loop
    
    return large;
  }//end of largestEvenNumber function.