/*
Exercise 1:
Where can you print out the value of variable c without resulting in an error?

anywhere inside the function y()

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
*/

/////////////////////////////////////////////////////////

/*
Exercise 2: Dise Roller
*/
var finalResult = function rollDice(times){
  
    var roll = [];
    let sum = 0;
    let result = "Dise rolled are ";
    for(let i=0 ; i<times ; i++){
      roll[i] = parseInt(10 * Math.random());
      
       while(roll[i] > 6 || roll[i] === 0){
             roll[i] = parseInt(10 * Math.random());
      }//end while loop
      
      console.log(roll[i]);
      sum += roll[i]
    }//end for loop
    
    for(let i=0 ; i<times ; i++){
      
      if(times-1 === i){
        result += "and ";
      }
      
      result += roll[i];
      
      if(times-1 > i){
        result += ", ";
      }
      
    }//end for loop
    
    result += ". Sum is " + sum;
    
    return (result);
  }

///////////////////////////////////////////////////

  //Exercise 3: currencyConverter(currency, amount)

function currencyConverter(amount, currency){
    let afterConvert = 1;
        
    if(currency === "UDS"){
      afterConvert = amount * 0.266667; 
      console.log(amount + " Riyal = "+ afterConvert +" in United state dollar");
      
    }else if(currency === "GBP"){
      afterConvert = amount * 0.197207;
      console.log(amount + " Riyal = "+afterConvert+" in British pound sterling");  
      
    }else if(currency === "EGP"){
      afterConvert = amount * 4.16522;
      console.log(amount + " Riyal = "+ afterConvert + " in Egyptian pound");
      
    }else if (currency === "BD"){
      afterConvert = amount * 0.100267;
      console.log(amount + " Riyal = "+ afterConvert + " in Bahraini dinar"); 
      
    }else {
      console.log("invalid");  
    }//end if else statement.
    
  }// end currencyConverter function


/////////////////////////////////////////////////////

  //Exercise 4: isCharacterAVowel(character)

function isCharacterAVowel(character){
  
    if(character === 'a' || character === 'u' || character === 'i' || character === 'o' || character === 'e')
      return true;
    
    return false;
  }