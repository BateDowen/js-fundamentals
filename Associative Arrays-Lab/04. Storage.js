function storage(input) {
    let storage = new Map();
    for(let entry of input){
        entry = entry.split(' ');
        let name = entry[0];
        let quantity = Number(entry[1]);
        if (storage.has(name)) {
            let newQuantity = storage.get(name) + quantity;
            storage.set(name, newQuantity)
        }else{
            storage.set(name, quantity);
        }
    }
    for(let storageEntry of storage){
        console.log(`${storageEntry[0]} -> ${storageEntry[1]}`)
    }

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])