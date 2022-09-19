function cutAndReverse(str) {
    let arrl = str.length
    let firstHalf = str.substring(0,arrl / 2).split('').reverse().join('');
    let secondHalf = str.substring(arrl / 2).split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')