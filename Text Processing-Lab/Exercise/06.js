function pascalCase(str) {
   let wors =[];
   str = str.split('');
   str.forEach(el => {
    if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
        wors.push(el);
    }else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
        wors[wors.length - 1] += el;
    }
   });
   console.log(wors.join(', '));
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')