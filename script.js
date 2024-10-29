

function check(aa){

   if (aa.includes('A') || (aa.includes('a'))){
    return true
   }
   else {
    return false 
   }
}
console.log (check('aymen'))



function age(bb){
    if ((13<bb) && (bb<18)){
        return true
    }
    else {
    return false
}}
console.log (age(15))





function discount(price, isMember) {


    if (isMember == true && price > 100) {
       
     return   price * 0.2 ;
    } else if (isMember == true && price <= 100) {
         
        return price * 0.1 ;
    } 
    else{

    return price ;  
}
}

console.log  (discount(200,false))


function div (num) {

    if (num % 4 == 0 && num % 6 == 0 ) {
        return ('divisible by both 4 and 6')
    }
    else if (num % 4 == 0 ) {
        return ('divisible by 4')
    }
    else if (num % 4 == 0) {
        return ('divisible by 6')
    }
    return ("not divisible by 4 and 6")
}






function vip (age,mem,vip){

    if (( age > 0) && (mem == true ) && (vip !== "")) {
        return true}
        else {
            return false
        }

    }
console.log ( vip (19,true,'ahmed'))



function checkGuess(number, guess) {
    if (guess > number) {
      return "Too high!";
    } else if (guess < number) {
      return "Too low!";
    } else {
      return "Correct!";
    }
  }
  console.log(checkGuess(3,2))

  function ise (age,stu){

    if ((age < 18) || (age > 60) && ( stu == true )){

        return true
    }
    else {
        return false
    }
  }
  console.log (ise (19 , false ))

  function can(name, password, isAdmin) {
    if (name === "admin" && password === "12345" && isAdmin === true) {
        return "Access granted for admin";
    } else if (name !== "admin" && password === "12345") {
        return "Access granted for user";
    } else {
        return "Access denied";
    }
}
console.log (can ("admin","12345",true))


function classify (num) { 
    
        if (num === 0) {
            return "Zero";
        }
        
        else if ( (num > 0) && (num % 2 === 0) ) {
                return "Positive and even";
            }
            
       else if ((num < 0) && (num % 2 === 0)) {
                return "Negative and even";
            } 
            else {
                return "Negative and odd";
            }  
        }
        console.log (classify(10))

        function countVowels(str) {
           
            const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
            
            if (str.includes(vowels)){
                return true ;
            }
            else{
                return false;
            }
          
        }
    
    console.log (countVowels('ayegzegezmen'))


    function circleProperties(radius) {
        const circumference = (2 * Math.PI * radius).toFixed(2);
        const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    
        return {
            circumference: parseFloat(circumference),
            area: parseFloat(area)
        };
    }



    function replaceWord(sentence, wordToReplace, replacement) {
        return sentence.replaceAll(wordToReplace, replacement);
    }

    let sentence = "The quick brown  dog. The dog was .";
    let result = replaceWord(sentence, "dog", "cat");
    console.log(result);



    function formatBalance(balance) {
        return balance.toFixed(2);
    }

    console.log(formatBalance(123.456)); 





