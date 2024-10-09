/**
 * first100 ----> 100;
 * 101To200 ----> 90;
 * above200 ----> 70;
*/ 


function layerDiscountTotal (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const second100Total = remainingQuantity * second100Price;
        const total = first100Total + second100Total;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const above200Total = remainingQuantity * above200Price;
        const total = first100Total + second100Total + above200Total;
        return total;
    }

}

const total = layerDiscountTotal(2);
console.log(total);



// function layerDiscountTotal(quantity){
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200Price = 70;

//     if(quantity <= 100){
//         const total = quantity *first100Price;
//         return total;
//     }
//     else if(quantity <= 200){
//         const first100Total = 100 * first100Price;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal = remainingQuantity * second100Price;
//         const total = first100Price + remainingTotal;
//         return total;
//     }
//     else{
//         const first100Total = 100 * first100Price;
//         const second100Total = 100 * second100Price;
//         const remainingQuantity = quantity -200;
//         const remainingTotal = remainingQuantity * above200Price;
//         const total = first100Total + second100Total + remainingTotal;
//         return total;
//     }

// }

// const total = layerDiscountTotal(201);
// console.log(total);

