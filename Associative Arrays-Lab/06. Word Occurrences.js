function wordOccurrences(input) {
//     let words = new Map();

//     for(let word of input){
//         if (words.has(word)) {
//             let currCount = words.get(word);
//             words.set(word, currCount + 1);
//         }else {
//             words.set(word, 1);
//         }
//     }
//     let sorsted = Array.from(words.entries());
//     sorsted.sort((a,b) => b[1] - a[1]);
//     sorsted.forEach(el => console.log(`${el[0]} -> ${el[1]} times`))
// }
    let words = {};
    for(let word of input){
        if (words.hasOwnProperty(word)) {
            words[word] += 1; 
        }else{
            words[word] = 1
        }
    }
    let sorted = Object.entries(words);
    sorted.sort((a,b) => b[1] - a[1]);
    sorted.forEach(el => console.log(`${el[0]} -> ${el[1]} times`))
}   
wordOccurrences(["Here", "is", "the", "first", "sentence",
 "Here", "is", "another", "sentence", 
 "And", "finally", "the", "third", "sentence"])