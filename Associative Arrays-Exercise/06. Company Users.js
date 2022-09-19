function companyUsers(input) {
    let listOfCompanies = {};

    for(let item of input){
        let [company, employee] = item.split(' -> ');
        if (!listOfCompanies.hasOwnProperty(company)) {
            listOfCompanies[company] = [];
        }
        if (!listOfCompanies[company].includes(employee)) {
            listOfCompanies[company].push(employee)
        }
    }
    let sorted = Object.keys(listOfCompanies);
    sorted.sort((a,b) => a.localeCompare(b));

    for(let company of sorted){
        console.log(company);
        for(let employee of listOfCompanies[company]){
            console.log(`-- ${employee}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])