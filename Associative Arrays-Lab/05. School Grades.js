function schoolGrades(arr) {
    let schoolGrades = new Map();
    for(let enty of arr){
        let token = enty.split(' ');
        let name = token.shift();
        let grades = token.map(Number);

        if (schoolGrades.has(name)) {
            let currGrades = schoolGrades.get(name);
            for(let grade of grades){
                currGrades.push(grade);
            }
            schoolGrades.set(name, currGrades)
        } else{
            schoolGrades.set(name, grades)
        }
    }
    let sortedSchoolGrades = Array.from(schoolGrades.entries());
    sortedSchoolGrades.sort((a,b) => a[0].localeCompare(b[0]));
    for(let gradesEntry of sortedSchoolGrades){
        let studentName = gradesEntry[0];
        let studentGrades = gradesEntry[1];
        let sum = 0;
        studentGrades.forEach(el => {
         sum += el;
        });
        sum /= studentGrades.length;

        console.log(`${studentName}: ${(sum.toFixed(2))}`);
    }
  
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])