function loadingBar(num) {
    let number = num;
    let loadingBar = Array(10).fill('.');
    let position = number / 10;
   
    for(let i = 1; i <= position; i++){
        loadingBar.shift('');
        loadingBar.push('%');
        
    } 
    loadingBar.reverse();
    if (number != 100) {
        console.log(`${number}% ` + `[${loadingBar.join('')}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
        console.log(`[${loadingBar.join('')}]`);
    }
}
loadingBar(30)
loadingBar(50)
loadingBar(100)