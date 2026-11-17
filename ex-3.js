// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// // Start coding here

for(let number of scores){
    if (minScore === undefined || number < minScore){
        minScore = number;
    }
}
console.log(minScore);
