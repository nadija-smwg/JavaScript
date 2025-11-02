let TotalPrice;
const standardShippingCost = 6
const discountShippingCost = 4



function calculateShippingCost(i) {
    let ShippingCost;

    if (i <= 10){
        ShippingCost = 5
    }else if (i <= 20){
        ShippingCost = 3
    } else {
        ShippingCost = 0
    }
        
    console.log(`ShippingCost for you is ${ShippingCost}`);
    console.log(`your total price is ${ShippingCost + i}`)
    

}
standardShippingCost = 7
//user start shopping
TotalPrice = 10
// more item added to cart
TotalPrice = 19
//ready to order
calculateShippingCost(TotalPrice);