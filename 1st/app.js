function calculateShippingCost() {
    let TotalPrice = 19;
    let ShippingCost;

    if (TotalPrice <= 10){
        ShippingCost = 5
    }else if (TotalPrice <= 20){
        ShippingCost = 3
    } else {
        ShippingCost = 0
    }
        
        console.log(`ShippingCost for you is ${ShippingCost}`);

}

calculateShippingCost()