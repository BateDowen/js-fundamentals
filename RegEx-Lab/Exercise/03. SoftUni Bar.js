function  softUniBar(input) {
    let customerPattern = /%[A-Z][a-z]+%/g;
    let productPattern = /<[A-Za-z]+>/g;
    let countPattern = /\|\d+\|/g;
    let pricePattern = /(\d+(?:\.\d+)?)\$/g;
    let totalIcome = 0;
    while (input[0] !== "end of shift") {
        let line = input.shift();
        let customer = line.match(customerPattern)
        let customerName;
        if (customer !== null) {
            customerName = customer.toString().split('');   
            let customerArr = [];
            for(let letter of customerName){
               if (letter != "%") {
                   customerArr.push(letter)
               }
            }
           customerName = customerArr.join('');
        }

        let product = line.match(productPattern)
        let productName;
        if (product !== null) {
            productName = product.toString().split('');
            let productArr = []
            for(let letter of productName){
            if (letter != "<" && letter != ">") {
                productArr.push(letter)
            }
        }
            productName = productArr.join('');
        }

        let count = line.match(countPattern);
        let countName;
        if (count !== null) {
            countName = count.toString().split('');
            let countArr = []
            for(let letter of countName){
            if (letter != "|") {
                countArr.push(letter);
            }
        }
          countName = countArr.join('');
        }

        let price = line.match(pricePattern);
        let priceName;
        if (price !== null) {
            priceName = price.toString().split('');
            let priceArr = [];
            for(let letter of priceName){
            if (letter != '$') {
                priceArr.push(letter)
            }
        }
        priceName = priceArr.join('');
        }

        if (customerName && productName && countName && priceName) {
            let totalPrice = Number(countName) * Number(priceName); 
            console.log(`${customerName}: ${productName} - ${totalPrice.toFixed(2)}`);
            totalIcome += totalPrice;
        }
       
    }
    console.log(`Total income: ${totalIcome.toFixed(2)}`);
}
softUniBar([
//     '%InvalidName%<Croissant>|2|10.3$',
// '%Peter%<Gum>1.3$',
// '%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])