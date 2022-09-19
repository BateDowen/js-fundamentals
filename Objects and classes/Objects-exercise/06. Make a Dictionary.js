function makeDictionary(input) {
    let arr = [];

    for(let line of input){
    let obj = JSON.parse(line);
    let objEntries = Object.entries(obj)
    let term = objEntries[0];
        arr.push({
            term : term[0],
            definition: term[1]
        });
    let inculeded = arr.findIndex((obj => obj.term == term[0]));
        if (inculeded) {
            arr[inculeded].definition = term[1];
        }
    
        
    }
    let sorted = arr.sort(((a,b) => a.term.localeCompare(b.term)))
    sorted.forEach(el => {
        console.log(`Term: ${el.term} => Definition: ${el.definition}`);
    })
}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Bus":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])