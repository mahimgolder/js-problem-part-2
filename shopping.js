function allProductNumber(shartNumber, pantNumber, shoesNumber ){
    const perShartPrice = 500;
    const perPantPrice = 300;
    const perShoesPrice = 900;

    const totalShartPrice = perShartPrice * shartNumber;
    const totalPantPrice = perPantPrice * pantNumber;
    const totalShoesPrice = perShoesPrice * shoesNumber;

    const totalPrice = totalShartPrice + totalPantPrice + totalShoesPrice;

    return totalPrice;
}

const allProductPrice = allProductNumber(1, 1, 1);
console.log(allProductPrice);