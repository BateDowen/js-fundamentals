function addAndSubtract(fNum,sNum,thNum) {
    let sumOfNumbers = () => fNum + sNum;
    let sum = sumOfNumbers(); 

    let subStractNumbers = () => sum - thNum;
    let subStract = subStractNumbers();
    console.log(subStract);
}
addAndSubtract(23,
    6,
    10)