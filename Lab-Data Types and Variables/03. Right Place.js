function rightPlace(firstStr, char, secondStr) {
    let newStr = firstStr.replace("_",char);
    let result = (newStr === secondStr) ?
    "Matched" : "Not Mathced"
    console.log(result);
}
rightPlace('Str_ng', 'I', 'Strong')