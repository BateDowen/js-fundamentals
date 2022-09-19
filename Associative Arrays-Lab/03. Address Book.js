function  addressBook(input) {
    let addressBook = {};
    for(let entry of input){
        // let [day, name] = entry.split(' ')
        entry = entry.split(':');
        let name = entry[0];
        let address = entry[1];
        addressBook[name] = address;
    }
    let sorted = Object.entries(addressBook);
    sorted.sort((a,b) => a[0].localeCompare(b[0]))
    sorted.forEach((el) => {
        console.log(`${el[0]} -> ${el[1]}`);
    })

}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])