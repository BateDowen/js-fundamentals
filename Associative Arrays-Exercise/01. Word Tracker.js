function wordTracker(input) {
    let wordsToSearch = input.shift().split(' ');
    let myWords = {};

    for(let el of wordsToSearch){
        myWords[el] = 0;
    }
    for(let word of input){
        if (myWords.hasOwnProperty(word)) {
            myWords[word] += 1;
        }
    }
    let sorted = Object.entries(myWords)
    sorted.sort((a, b) => b[1] - a[1]);
    sorted.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);
    });
}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 
    'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 
    'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])