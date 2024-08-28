function add() {
    //getting input values from input fileds
    let num1 = parseFloat(document.getElementById('firstnum').value);
    let num2 = parseFloat(document.getElementById('secondnum').value);
    
    // Perform the addition
    let sum = num1 + num2;

    // Display the result in the result input field
    document.getElementById('res').value = sum;
}

function sub() {
     //getting input values from input fileds
    let num1 = parseFloat(document.getElementById('firstnum').value);
    let num2 = parseFloat(document.getElementById('secondnum').value);
    
    // Perform the subtraction
    let sub = num1 - num2;

    // Display the result in the result input field
    document.getElementById('res').value = sub;
}

function mul() {
    //getting input values from input fileds
   let num1 = parseFloat(document.getElementById('firstnum').value);
   let num2 = parseFloat(document.getElementById('secondnum').value);
   
   // Perform the multiplication
   let mul = num1 * num2;

   // Display the result in the result input field
   document.getElementById('res').value = mul;
}

function div() {
    //getting input values from input fileds
   let num1 = parseFloat(document.getElementById('firstnum').value);
   let num2 = parseFloat(document.getElementById('secondnum').value);
   
   // Perform the multiplication
   let div = num1 / num2;

   // Display the result in the result input field
   document.getElementById('res').value = div;
}


