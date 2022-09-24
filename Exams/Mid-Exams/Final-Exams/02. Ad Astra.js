function adAstra(input) {
    let regex = /(\||#)(?<name>[a-z(\s?)A-Z]+)(\1)(?<date>\d{2}\/\d{2}\/\d{2})((\||#)(?<cal>\d+)(\1))/g;
    let text = input;
    let totalCal = 0;
    let dayCal = 2000;
    let arr = []
   while((text != null)) {
    let validMatch = regex.exec(text);
    if (validMatch == null) {
        break
    }
    validMatch = validMatch.groups;
    totalCal += Number(validMatch.cal);
    arr.push(validMatch)

   }
   totalCal = totalCal / dayCal;
   console.log(`You have food to last you for: ${Math.floor(totalCal)} days!`);
   arr.forEach(el => console.log(`Item: ${el.name}, Best before: ${el.date}, Nutrition: ${el.cal}`))
    

}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]
)