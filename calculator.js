function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(a, opereation, b){
    if(opereation === '+'){
        const result = add(a, b);
        return result;
    }
    else if (opereation === '-'){
        const result = subtract(a, b);
        return result;
    }
    else if(opereation === '*'){
        const result = multiply (a, b);
        return result;
    }
    else if(opereation === '/'){
        const result = divide (a, b);
        return result;
    }
    else{
        const result = "only 'add', 'subtract', 'multiply, 'divided', operation is allowed."
        return result;
    }

}
const result = calculator(5, '*', 5)
console.log(result);