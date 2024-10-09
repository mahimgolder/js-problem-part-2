const mobiles = [
    {name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
    {name: 'xomai', price: 18000, camera: '12mp', color: 'black' },
    {name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    {name: 'Iphone', price: 10000000, camera: '12mp', color: 'black' },
    {name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    {name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
];

/** min price r phone ber korar function **/
// function getCheapeatPhone(phones){
//     let min = phones[0];
//     for(const phone of phones){
//         if(phone.price < min.price){
//             min = phone;
//         }
//     }
//     return min;
// }


/** maxPrice r phone ber korar function **/
function getCheapeatPhone(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const cheap = getCheapeatPhone(mobiles);
console.log('cheapest phone is:', cheap);