function matchFullName(input) {
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches = input.match(regEx);
    let result = []
    for(let name of matches){
       result.push(name);
    }
    console.log(result.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
)