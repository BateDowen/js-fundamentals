function furniture(input) {
    let regEx = /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/;
    let furniture = [];
    
    let total = 0;
    while (input[0] !== "Purchase") {
        let line = input.shift();
        let validMatch = regEx.exec(line)
        if (validMatch !== null) {
            let {name, price, qty} = validMatch.groups;
            price = Number(price);
            qty = Number(qty);
            furniture.push(name);
            total += price * qty;
        }
    }
    console.log(`Bought furniture:`);
    furniture.forEach(el => console.log(el));
    console.log(`Total money spend: ${total.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)