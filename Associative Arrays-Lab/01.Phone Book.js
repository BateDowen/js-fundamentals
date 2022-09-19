function phoneBook(input) {
    // let assosArr = {};
    // for(let entry of input){
    //     entry = entry.split(' ');
    //     assosArr[entry[0]] = entry[1];
    // }
    // for(let assosKey in assosArr){
    //     console.log(`${assosKey} -> ${assosArr[assosKey]}`);
    // }
    let assosArr = new Map();
    for(let entry of input){
        entry = entry.split(' ');
        let name = entry[0];
        let number = entry[1];
        assosArr.set(name, number);
    }
    let newArr = Array.from(assosArr.entries());
    for(let line of newArr){
        console.log(`${line[0]} -> ${line[1]}`)
    }
    
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])