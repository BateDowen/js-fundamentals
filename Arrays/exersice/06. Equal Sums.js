function solve(arr) {
  let array = arr;
  let arrL = array.length;
  let isEqual = false;
  let index;
  for(let i = 0; i < arrL; i++){
     let leftSum = 0;
     let rigthSum = 0;
     for (let j = 0; j < i; j++) {
        leftSum += array[j];
     }
     for(let k = i + 1; k < arrL; k++) {
        	rigthSum += array[k];
     }
     if (leftSum === rigthSum) {
       index = i;
       isEqual = true
     }
  }
  if (isEqual) {
    console.log(index);
  } else {
    console.log("no");
  }
  
}

solve([1, 2, 3, 3])
solve([1, 2])
solve([1])
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])