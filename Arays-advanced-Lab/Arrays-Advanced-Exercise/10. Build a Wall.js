function buildWall (teams) {
    let arrAsNum = teams.slice(0);
    let sortedArr =  arrAsNum.sort((a,b) =>{
        return a - b;
       })
    let oneFootYardConcrete = 195;
    let priceOfOneCubic = 1900;
    let dailyUsedConcrete = [];;
    let totalConcreteprice = 0 
    while (dailyUsedConcrete.length < 2000) {
       
        let lastElement = sortedArr[sortedArr.length - 1];
        if (lastElement >= 30) {
            sortedArr.pop();
            let isBelow = (elements) => elements >= 30;

            if (sortedArr.every(isBelow)) {
                break
            }
        }
        
        let buildPerDay = sortedArr.map(x => x + 1);
        if (buildPerDay.length <= 0) {
            break;
        }
        sortedArr = buildPerDay;
        let usedConcrete = sortedArr.length * oneFootYardConcrete;
        let concretePricePerDay = priceOfOneCubic * usedConcrete
        totalConcreteprice += concretePricePerDay;
        dailyUsedConcrete.push(usedConcrete);
        
    }
    console.log(dailyUsedConcrete.join(', '));
    console.log(`${totalConcreteprice} pesos`);
}
// buildWall([21, 25, 28])
// buildWall([17])
buildWall([17, 22, 17, 19, 17])