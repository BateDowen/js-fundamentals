function matrix(input) {
    let number = input;
    let rowGenerator = (num) => {
        let output = "";
        for(let i = 0; i < num; i++){
            output += `${number} `
        }
        return output;
    }
    for(let i = 0; i < number; i++){
        console.log(rowGenerator(number));
    }
}
matrix(5)