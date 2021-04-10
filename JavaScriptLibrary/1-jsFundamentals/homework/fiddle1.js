let num

let evenOrOdd = function(checkNum){
    for(num = 1; num>0 && num<=10; num++)        
        if(num%2 == 0){
          console.log(num + ":The number is even");
      } else{
          console.log(num + ":The number is odd")
	console.log();}
}

evenOrOdd();


/*
  1. Write a for loop that counts from 0-10
  2. Declare a function named evenOrOdd that holds a single parameter named num
  3. Each time the for loop runs, it should invoke the functin of evenOrOdd, and pass in the number from the for loop as the argument
  4. Inside of the function body, write a conditional that checks if the number being passed to the function from the for loop is even or odd
      - if the number is even, console.log the number + 'the number is even'
      - if the number is odd, console.log the number + 'the number is odd'
*/