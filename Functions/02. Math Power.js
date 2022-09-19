function  mathPower(input) {
    let num = input[0];
    let stepen = input[1];
    let res = 1;
    for(let i = 1; i <= stepen; i++){
        res = res * num;
    }
    console.log(res);
}
mathPower([2,8])