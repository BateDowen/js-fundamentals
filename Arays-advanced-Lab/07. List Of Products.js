function  listOfProducts(arr) {
   let array = arr;
   let sortedArr = array.sort();
   let arrL = array.length;
   for(let i = 0; i < arrL; i++){
    console.log(`${i+1}.${sortedArr[i]}`);
   }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])