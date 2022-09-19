function  stringSubstring(word, text) {
    let sentence = text.toLowerCase();
    let wordToLower = word.toLowerCase();
    let textArr = sentence.split(' ');

    if (textArr.includes(wordToLower)) {
        console.log(wordToLower);
    }else{
        console.log(`${wordToLower} not found!`);
    }
}
stringSubstring('python',
'JavaScript is the best programming language')