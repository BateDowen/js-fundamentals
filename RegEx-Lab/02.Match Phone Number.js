function matchPhoneNumber(input) {
    let regEx = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let result =[];
    let validMatch
    while ((validMatch = regEx.exec(input)) !== null) {
        result.push(validMatch[0]);
    }
    console.log(result.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']
)