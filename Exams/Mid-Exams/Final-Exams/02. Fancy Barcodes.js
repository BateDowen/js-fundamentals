function fancyBarcodes(input) {
    let productCout = Number(input.shift());
    let pattern = /@#+(?<prod>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

    while (productCout > 0) {
        let barcode = input.shift();
        let match
        match = pattern.exec(barcode);

        if (match) {
            let productGroup = '';
            let product = match.groups.prod;
            for(let ch of product){
                let isNumber = Number(ch);
                if (isNumber * 1 === isNumber) {
                    productGroup += ch
                }
            }
            if (productGroup === '') {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }
        productCout--;
    }
}
fancyBarcodes((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]))