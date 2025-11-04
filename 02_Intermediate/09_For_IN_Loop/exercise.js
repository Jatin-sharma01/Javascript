// Iterate over object & log the property and the value of that object using for in loop.
const object = { a: 1, b: 2, c: 3 };

for(const key in object){
    console.log(`${key}: ${object[key]}`);
    
}

// Exercise 2
// You are given an object representing a student's test scores. Each property of the object represents the subject name (e.g., "Math", "Science") and the value represents the score. Your task is to use the "for...in" loop to calculate and print the average score of the student.

// const testScores = {
//   Math: 90,
//   Science: 85,
//   History: 78,
//   English: 92,
//   Geography: 88,
// };

// Write a function called calculateAverageScore that takes an object representing test scores as an argument and returns the average score of the student.

// const testScores = {
//   Math: 90,
//   Science: 85,
//   History: 78,
//   English: 92,
//   Geography: 88,
// };

// const averageScore = calculateAverageScore(testScores);
// console.log(averageScore); // Output: 86.6

// ****************** SOLUTION
const testScores = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};

const calculateAverageScore =({Math,Science,History,English,Geography})=>{
    const total =( Math + Science + History + English + Geography)/5
    return total
    
}
const average = calculateAverageScore(testScores)
console.log(average)


for(const key in testScores){
  console.log(`Your ${key} Marks Are: ${testScores[key]}`);
  console.log(`The Average Marks are: ${average}`)
}