function solve(arr) {
    let longestSequence = []
    let arrayNumbers = arr
    let arrayNumbersL = arrayNumbers.length
    for (let i = 0; i < arrayNumbersL; i++) {
        let currentEl = arrayNumbers[i]
        let currentSequence = [currentEl]
        for (let j = i + 1; j < arrayNumbersL; j++) {
            let nextEl = arrayNumbers[j]
            if (nextEl === currentEl) {
                currentSequence.push(nextEl)
            } else {
                break;
            }
            
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence
        }
    }
    console.log(longestSequence.join(' '));
}
// solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
// solve([1, 1, 1, 2, 3, 1, 3, 3])
// solve([4, 4, 4, 4])
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])