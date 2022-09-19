function  oddOccurrences(input) {
    let words = input.toLowerCase().split(' ');

    let map = new Map();
    for(let word of words){
        let num = 0;
        if (map.has(word)) {
            num = map.get(word)
        }
        num++;
        map.set(word, num);
    }
    let entries = Array.from(map);
    let filtredElements = entries.filter((el) => {
        return el[1] % 2 !== 0;
    });
    let result = [];
    for(let el of filtredElements){
        result.push(el[0]);
    }
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')