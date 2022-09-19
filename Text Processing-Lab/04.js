function solve(text,word) {
    let textArr = text.split(" ");
    let count = 0;
    for(let current of textArr){
        if (current === word) {
            count++;
        }
    }
    console.log(count);
}
solve('This is a word and it also is a sentence',
'is')