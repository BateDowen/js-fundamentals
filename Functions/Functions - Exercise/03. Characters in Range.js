function charactersInRange(firstChar, secChar) {
    let firstChAsNumber = firstChar.charCodeAt(0);
    let secChAsNumber = secChar.charCodeAt(0);
    let smalerNum = Math.min(firstChAsNumber,secChAsNumber);
    let biggerNum = Math.max(firstChAsNumber,secChAsNumber);
    let result = [];
    for(let i = smalerNum +1; i < biggerNum; i++){
        let currentElement = String.fromCharCode(i);
        result.push(currentElement);
    } console.log(result.join(' '));
}
charactersInRange('a', 'd')