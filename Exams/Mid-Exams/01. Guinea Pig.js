function guineaPig(input) {
    let foodQuantityGr = Number(input[0]) *1000;
    let hayQuantityGr = Number(input[1]) * 1000;
    let coverQuantityGr = Number(input[2]) * 1000;
    let pigWeigthGr = Number(input[3]) * 1000;
    let dailyFoodGr = 300;
    for(let i = 1; i <= 30; i++){
        foodQuantityGr -= dailyFoodGr;
        if (i % 2 === 0) {
            let amountOfHay = foodQuantityGr * 0.05;
            hayQuantityGr -= amountOfHay;
        }
        if (i % 3 === 0) {
            let amountOfCover = pigWeigthGr * (1/3);
            coverQuantityGr -= amountOfCover
        }
        if (foodQuantityGr <= 0||hayQuantityGr <= 0||coverQuantityGr <= 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }
    }
    let food = foodQuantityGr / 1000;
    let hay = hayQuantityGr / 1000;
    let cover = coverQuantityGr / 1000;
    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);

}
guineaPig((["10", 
"5", 
"5.2", 
"1"]))