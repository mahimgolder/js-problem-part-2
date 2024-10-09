const heights =[65, 66, 64, 72, 78, 60, 65, 66];

function getMax(numbers){
    for(const num of numbers){
        let max =num;
        if(num > max){
            max = num;
        }
    }
}
const max = getMax(heights);
console.log('max value is :', max );


// function giveName(){
//     const x ="mahim"
//     return x

// }
// const myname = giveName()
// console.log(myname)




// const numbers =[2, 4, 21, 5, 6, 23, 20, 9]

// let biggest = numbers[0];
// console.log('before loop:', biggest)
// for (let i = 1; i<numbers.length; i++ ){
//     console.log('current number:',numbers[i], 'biggest number:', biggest);
//     if (numbers[i] > biggest){
//         biggest = numbers[i];
//     }
// }
