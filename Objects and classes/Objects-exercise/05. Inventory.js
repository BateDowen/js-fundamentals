function inventory(input) {
    let heroData = [];
    for(let data of input){
        let arrOfData = data.split(' / ');
        let name = arrOfData[0];
        let level = arrOfData[1];
        let item = arrOfData[2];
        item
        
        heroData.push({
            name : name,
            level : +level,
            item : item
        });
    }
    let sortedObj = heroData.sort((a, b) => a.level - b.level);
    sortedObj.forEach(el => {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.item.split(', ').sort((a,b) => a.localeCompare(b)).join(', ')}`);
    })
        
    
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])