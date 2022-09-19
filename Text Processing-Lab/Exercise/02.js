function modernTimes(text) {
    let result =[];
    for(let element of text.split(' ')){
        if (element[0] === "#" && element.length !== 1) {
            result.push(element.substring(1));
        }
    }
    let final = [];
    for(let el of result){
        let arr = el.split('');
        let arrL = arr.length;
        let flag = true;
        for(let i = 0; i < arrL; i++){
            let currentCode = arr[i].charCodeAt(0);
            if ((currentCode < 97 || currentCode > 122) &&
                (currentCode < 65 || currentCode > 90)) {
                flag = false;
            }
        }
        if (flag) {
            final.push(el)
        }
    }
    console.log(final.join("\n"));
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')