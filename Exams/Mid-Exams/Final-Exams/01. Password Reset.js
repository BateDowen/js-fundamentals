function passwordReset(input) {
    let passWord = input.shift();
    let coommandParser = {
        "TakeOdd" : (passWord) => {
            return [...passWord]
            .filter((symbol, index) => index % 2 !== 0)
            .join('')
        },
        "Cut" : (passWord, index, length) => {
            index = Number(index);
            length = Number(length);

            let substring = passWord.substr(index,length);
            return passWord.replace(substring, "");
        },
        "Substitute" : (passWord,substring, substitute) => {
            if (passWord.includes(substring)) {
                return passWord.replace(new RegExp(substring, 'g'), substitute)
            }
            console.log("Nothing to replace!");
            return passWord;
        }
    }
    input.forEach(line => {
        if (line !== "Done") {

            let [command,...tokens] = line.split(' ');
            let oldPassword = passWord;
            passWord = coommandParser[command](passWord,...tokens);

            if (oldPassword !== passWord) {
                console.log(passWord);
            }
        }
    });
    console.log(`Your password is: ${passWord}`);
}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]))