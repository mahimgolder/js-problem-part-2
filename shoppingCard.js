const products = [
    {name: 'shanpoo', price: 300, quantity: 1},
    {name: 'chiruni', price: 100, quantity: 1},
    {name: 'shart', price: 700, quantity: 1},
    {name: 'pant', price: 1200, quantity: 1},
    {name: 'payjama', price: 200, quantity:10},
];

function cartTotal(){
    let total = 0;
    for(const product of products ){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const shoppingCast = cartTotal(products);
console.log(shoppingCast);
