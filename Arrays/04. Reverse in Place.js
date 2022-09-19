function  reverseinPlace(arr) {
    let arrlength = arr.length
    for(let i = 0; i < arrlength / 2; i++){
        let buffer = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length -1 - i] = buffer;
    }
    console.log(arr.join(' '));
} 
reverseinPlace(['a', 'b', 'c', 'd', 'e'])