function revealwords(words, str) {
    let wordAsArr = words.split(', ');

    for(let word of wordAsArr){
        let template = '*'.repeat(word.length);
        str = str.replace(template, word);
    }
    console.log(str);
}

revealwords('great',
'softuni is ***** place for learning new programming languages')