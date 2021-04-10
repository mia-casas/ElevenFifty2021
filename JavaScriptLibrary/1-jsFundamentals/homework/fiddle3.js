
function setVariables(){
    let store = document.getElementById("store").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;
    
    let text = `I went to ${store} to buy ${quantity} ${product}.`;

    let result = document.getElementsByClassName("result").innerHTML = text;
    let displayResult = document.querySelector('p').innerHTML = result;
    
    }    

    
// setVariables();

    /* 
  - Using the provided HTML code, declare a function named setVariables() that does the following:
    - declares variables of store, product, and quantity. These variables should access the store, product, and quantity elements from the HTML file, and pull out the value.
    - console.log an interpolated string of: 'I went to ${store} to buy ${quantity} ${product}'
    - delare a variable named text that is initialized as the interpolated string you just console.logged
    
    - declare a variable of result that accesses an element with a class of result from the HTML file
    - set the text of the result variable


    - using the onclick attribute provided in the HTML, call the function of setVariables(). You may need to read some documention on how the onclick attribute works!
*/