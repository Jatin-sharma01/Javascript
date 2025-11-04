//create an array of numbers.
//create a variable to hold the sum
//create the adder func which takes the parameter of number and add that with sum variables
// loop over the array, incrementing the sum variables except this time a function gets referenced in the forEach
//print the sum variable

const num =[1,2,3,4,5];
let sum =0;

function adder(number){
    sum +=number
}

let totalSum =num.forEach(adder);
console.log(sum);
