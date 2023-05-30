function creature(ls) {
        this.lifespan = ls;
}
creature.prototype.breath = function(){
        console.log("Breathing");
}
function person(first, last, a){
  this.firstName = first;
  this.lastName = last;
  this.age = a;  
}

person.prototype.fullName = function() {
        console.log(this.firstName + " " + this.lastName); 
  }


  person.prototype.__proto__ = Object.create(creature.prototype)

let person1 = new person("Milapdeep", "Singh", 30);
let person2 = new person("Pawan", "Kumar", 28);

console.log(person1);
console.log(person2.breath());
console.log(person1.fullName());