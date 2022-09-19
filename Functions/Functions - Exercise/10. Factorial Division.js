function factorialDivision(firstNum, secNum) {
    const firstFactorial = (firstNum) => {
        if (firstNum === 0) return 1;
        else return firstNum * firstFactorial(firstNum - 1);
      };
      console.log(firstFactorial(firstNum));

    //   const secFactorial = (secNum) => {
    //     if (secNum === 0) return 1;
    //     else return secNum * secFactorial(secNum - 1);
    //   };
    //   let dividedFactorials = firstFactorial(firstNum) / secFactorial(secNum);
    //   console.log(`${dividedFactorials.toFixed(2)}`);
}
factorialDivision(5,2)