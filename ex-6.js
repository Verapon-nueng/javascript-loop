// Exercise #6: Reverse the String
// let companyName = "TechUp Thailand";
// let reversedCompanyName = "";

// Start coding here
// for (let i = 0 ; i<companyName.length ; i++)
// {
//     reversedCompanyName=companyName[i]+reversedCompanyName
// }
// console.log(reversedCompanyName);


let companyName = "TechUp Thailand";
let reversedCompanyName = "";

for (let char of companyName) {
  reversedCompanyName = char + reversedCompanyName;
}

console.log(reversedCompanyName); 