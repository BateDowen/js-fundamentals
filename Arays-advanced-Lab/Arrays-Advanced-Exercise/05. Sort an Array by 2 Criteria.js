function solve(arr) {
    let sortArr = arr.sort()
    let alfabetSortArr = sortArr.sort(function (a,b) {
        return a.length - b.length
    });
    
    console.log(alfabetSortArr.join('\n'));
   
}
solve(['alpha', 'beta', 'gamma'])
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])