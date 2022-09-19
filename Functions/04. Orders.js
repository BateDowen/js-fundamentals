function orders(product, quantity) {
    let coffeePr = () => quantity * 1.50
    let waterPr = () => quantity * 1.00;
    let cokePr = () => quantity *  1.40;
    let snacksPr = () => quantity * 2.00;
    let total = 0;
    switch(product){
        case "coffee": total = coffeePr(); break;
        case "water": total =  waterPr(); break;
        case "coke": total =  cokePr(); break;
        case "snacks": total =  snacksPr(); break;
    }
    console.log(total.toFixed(2));
}
orders("water", 5)