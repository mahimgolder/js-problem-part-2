// number check korar funtion:
function multiply (num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a Number';
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply('5', 'seven');
// console.log(result);

// ------------*****------------
// string check korar function:
function fullName(first, second){
    if(typeof first !== 'string'){
        return 'Frist name should be a string';
    }
    else if(typeof second !== 'string'){
        return 'Second name should be a string '
    }
    
    const full = first + ' ' + second;
    return full;
}

const full = fullName('mahim' );
// console.log(full);


// ---------------******-------------
// object check korar function:
function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please type an Object '
    }
    const price = product.price;
    return price;
}

const price = getPrice({name: 'chulkani dandi', price: 35,color: 'blue'});
// const price = getPrice(5);// ata print korbe "please type an Object"
// console.log(price);

// -----------****----------------
// Array check korar function
function getSecond(array){
    if(typeof array );
    const second = array[1];
    return second;
}
const second = getSecond([1, 25, 69]);
// console.log(second);

// console log a object dekha jabe ,karon js a array o akdhoroner object.tai isArray diye check  korte hobe .

// isArray diye check kora : Note:[Array.isArray(paramiter)] 
function getSecond(array){
    if(Array.isArray(array) == false ){
        return 'Please enter an Array'
    }
    return array[2];
    
    
}
const array = [10, 20, 30, 40];
const second2 = getSecond(array);
console.log(second2);


// -----------END----------