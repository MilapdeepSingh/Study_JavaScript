// spread use in array
let list =["Audi", "Honda", "BMW"];
let newList = [...list, "TATA"];

console.log(newList);

// spread use in object
let person = {
    name: "Milapdeep Singh",
    age: 30
}
let newPerson = {
    ...person,
    city: "Amritsar"
}
console.log(newPerson);
// Rest use in function argument

function hello(...all){
    console.log(all)
}
hello(1, 2, 3, 4);