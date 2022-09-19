function numbers(input) {
    let arr = String(input).split(' ');
    let average = 0
    arr.forEach((el,index) => {
        average += Number(arr[index]) ;
    });
    let newArr = [];
    let arrL = arr.length;
    average /= arrL;
    
        for(let el of arr){
            if (Number(el) > average) {
                newArr.push(el);
            }
        }
    
    newArr.sort((a,b) => b - a);
    newArr.join(' ')
    if (newArr.length <= 0) {
        console.log('No');
    }else {
        console.log(newArr.slice(0, 5).join(' '));
    }
    
}
numbers(['10 20 30 40 50'])
numbers(['5 2 3 4 -10 30 40 50 20 50 60 60 51'])