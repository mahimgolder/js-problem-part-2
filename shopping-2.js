function myProductNumber (keyboard, monitor, laptop, router){
    const keyboardPrice = 3500;
    const monitorPrice = 13000;
    const laptopPrice = 50000;
    const routerPrice = 3500;

    const totalKeyboardprice = keyboardPrice * keyboard;
    const totalmonitorprice = monitorPrice * monitor;
    const totalLaptopPrice = laptopPrice * laptop;
    const totalRouterPrice = routerPrice * router;

    const totalPrice =totalKeyboardprice + totalmonitorprice + totalLaptopPrice + totalRouterPrice;
    return totalPrice;
}

const totalProduct = myProductNumber(1, 0, 0, 0);
console.log(totalProduct);