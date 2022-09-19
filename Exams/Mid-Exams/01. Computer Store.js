function computerStore(input) {
    let customer = input.pop();
    let parts =  input.map(x => Number(x));
    let arrL = input.length;
    let totalTaxes = 0;
    let partsSumNoTaxes = 0
    for(let i = 0; i < arrL; i++){
        if (input[i] < 0) {
            console.log(`Invalid price!`);
            continue
        }
        partsSumNoTaxes += parts[i];
        
    }
    totalTaxes = partsSumNoTaxes * 0.2;
    let totalSum = partsSumNoTaxes + totalTaxes;
    if (customer === "special") {
        totalSum *= 0.9;
    }
    if (totalSum <= 0) {
        console.log("Invalid order!"); 
    }else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${partsSumNoTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${totalTaxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalSum.toFixed(2)}$"`);

    }
}
computerStore(([ 'regular'
    ]))