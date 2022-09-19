function addAndRemove(arr) {
    let arrL = arr.length;
    let newArr = [];
    for(let i = 0; i <= arrL; i++){
        let current = Number(i) + 1
        let command = arr[i];
        if (command === "add") {
            newArr.push(current);
        }else if (command === 'remove') {
            newArr.splice([i - 1], 1);
        }
    }
    if (newArr == 0) {
        console.log('Empty');
    }else{
    console.log(newArr.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add'])

addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])