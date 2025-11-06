// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers =[1,2,3,4,5]
let double = numbers.map((num)=> num*2);
console.log(double);


let peoples = [
    {firstname: "Jatin1", lastName:"sharma1"},
    {firstname: "Jatin2", lastName:"sharma2"},
    {firstname: "Jatin3", lastName:"sharma3"}
]
let peoples2 = peoples.map(
    (person)=>{
        return [person.firstname, person.lastName];
    }
);
console.log(peoples2);
