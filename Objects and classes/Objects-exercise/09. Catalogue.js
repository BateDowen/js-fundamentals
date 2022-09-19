function catalogue(input) {
    let arrOfLetters =[];
    let arrOfArr = [];
    for(let line of input){
        let arr = line.split(':');
        let prod = arr[0]
        let mainLetter = line[0];
        let newArr = [];
        if (arrOfLetters.includes(mainLetter)) {
            continue;
        }
        newArr.push(mainLetter);
        arrOfArr.push(newArr);
        arrOfLetters.push(mainLetter)
    
    }
    
        for(let line of input){
            let arr = line.split(' :');
            let prod = arr[0];
            for(let el of arrOfArr){
                let arrOfProd = [];
                if (el.some(element => element.includes(prod[0]))) {
                    arrOfProd.push(`${arr[0]}:${arr[1]}`);
                    el.push(`  ${arrOfProd}`);
                }

            }
        }
    let sorted = arrOfArr.sort((a,b)=> a[0].localeCompare(b[0]))
    sorted.forEach(el => {
        let mainLetter = el.splice(1);
        console.log(`${el}`);
        let sortProd = mainLetter.sort((a,b) => a.localeCompare(b));
        sortProd.forEach(element => {
        console.log(element)
        });
    })
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )