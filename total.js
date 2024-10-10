
const products = [
    {name: 'shanpoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shart', price: 700},
    {name: 'pant', price: 1200},
];

function getShoppingTotal(){
    let total = 0;
    for(const product of products){
        total = total + product.price;        
    }
    return total;
}

const total = getShoppingTotal(products);
console.log(total);