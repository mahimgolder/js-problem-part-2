function multiply (num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a Number';
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply('5', 'seven');
console.log(result);