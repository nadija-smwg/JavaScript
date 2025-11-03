let TotalPrice;
const standardShippingCost = 6
const discountShippingCost = 4



function calculateShippingCost(i) {
    let ShippingCost;

    if (i <= 10){
        ShippingCost = standardShippingCost
    }else if (i <= 20){
        ShippingCost = discountShippingCost
    } else {
        ShippingCost = 0
    }
        
    console.log(`ShippingCost for you is ${ShippingCost}`);
    console.log(`your total price is ${ShippingCost + i}`)
    

}
//user start shopping
TotalPrice = 10
calculateShippingCost(TotalPrice);
// more item added to cart
TotalPrice = 19
//ready to order
calculateShippingCost(TotalPrice);
//add one more
TotalPrice = 24
calculateShippingCost(TotalPrice)