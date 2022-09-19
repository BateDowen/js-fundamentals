function minerTask(input) {
    let production = new Map();
    let arrl = input.length;

    for(let i = 0; i < arrl; i += 2){
        let current = input[i];
        let quantity = Number(input[i + 1]);

        if (!production.has(current)) {
            production.set(current,0);
        }
        let updateQuantity = production.get(current);
        updateQuantity += quantity;
        production.set(current, updateQuantity);
    }
    let arr = Array.from(production)
    arr.forEach((el)=> {
        console.log(`${el[0]} -> ${el[1]}`);
    })
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])