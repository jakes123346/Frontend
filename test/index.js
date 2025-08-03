function calculate(operation){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = '';

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers.'
        console.log('nan ')
    }
    else if (operation == "add"){
        result  = num1 + num2

    }
    else if (operation == "subtract"){
        result  = num1 - num2

    }
    else if (operation == "multiply"){
        result  = num1 * num2
    }
    else{
        result  = "Please insert valid inputs"
    }
    
    document.getElementById('result').innerText = 'Result: ' + result;
    }

