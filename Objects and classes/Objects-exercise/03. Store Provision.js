function storeProvision(currStocks,forDelivery) {
    let stocksInStore = {};
    let currStocksL = currStocks.length;
    let forDeliveryL = forDelivery.length;
    for(let i = 0; i < currStocksL; i+=2){
        let product = currStocks[i];
        stocksInStore[product] = Number(currStocks[i+1]);
    }

    for(let i = 0; i < forDeliveryL; i+=2){
        let product = forDelivery[i];
        if (!stocksInStore.hasOwnProperty(product)) {
            stocksInStore[product] = 0;
        }
        stocksInStore[product] += Number(forDelivery[i+1])
    }
    for(let product in stocksInStore){
        console.log(`${product} -> ${stocksInStore[product]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])