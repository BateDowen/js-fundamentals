function mirrorWords(input) {
    let pattern = /(@|#)(?<firstWord>[A-Za-z]{3,})\1(@|#)(?<secondWord>[A-Za-z]{3,})\1/g;
    let validMatch
    let text = input;
    let mirrorArr = [];
    let pairWord = []
    while ((text != null)) {
        validMatch = pattern.exec(text);
        if (validMatch == null) {
            break;
        }
        validMatch = validMatch.groups;
        let check = validMatch.firstWord.split('').reverse().join('');
        if (check === validMatch.secondWord) {
            let mirrorWords = [];
            mirrorWords.push(validMatch.firstWord,validMatch.secondWord);
            mirrorArr.push(mirrorWords);
        }
        let pair = [];
        pair.push(validMatch.firstWord,validMatch.secondWord);
        pairWord.push(pair);
    }
    
    let pairWordCount = pairWord.length;
    if (pairWordCount == 0) {
        console.log(`No word pairs found!`);
    }else{
        console.log(`${pairWordCount} word pairs found!`);
    }
    
    let mirrorWordsCount = mirrorArr.length;
    if (mirrorWordsCount == 0) {
        console.log(`No mirror words!`);
    }else{
        console.log(`The mirror words are:`);
        let sorted = mirrorArr.map(el => el.join(' <=> '))
        console.log(sorted.join(', '));
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )