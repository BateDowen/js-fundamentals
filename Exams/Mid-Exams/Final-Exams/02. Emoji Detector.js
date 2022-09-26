function emojiDetector(input) {
    let text = input[0]
    let smileyRegex = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
    let digitsReg = /\d/g;

    let digits = text.match(digitsReg);
    let treshold = 1;
    digits.map(d => treshold *= Number(d));
    console.log(`Cool threshold: ${treshold}`);
    let validMatch;
    let emojis = [];
    while (validMatch = smileyRegex.exec(text)) {
        emojis.push(validMatch)
    }
    console.log(`${emojis.length} emojis found in the text. The cool ones are: `);

    for(let emoji of emojis){
        let emojiText = emoji[2];
        let fullEmoji = emoji[0];
        let coolnes = 0

        for(let letter of emojiText){
            coolnes += letter.charCodeAt();
        }
        if (coolnes > treshold) {
            console.log(fullEmoji);
        }
    }
}
emojiDetector([("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")])