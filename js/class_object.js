class person {
   constructor(n, a){
      this.name = n;
      this.age = a;
   }
   sayHi(){
      console.log("Hi...")
   }
    static sProperty = "Something";
    static hello(){
      console.log("Hello...")
   }
}

let person1 = new person("Milapdeep", 30);
person1.sayHi();
person.hello();
console.log(person.sProperty);
console.log(person1);