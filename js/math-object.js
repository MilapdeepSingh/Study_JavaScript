// let x = Math.floor(Math.random()*10)+1;

// document.write(`<h1>${x}<h1>`);

// let y = new Date();
// let timebox = document.getElementsByClassName('time');
//     timebox.innerHTML  = "Hello";

// alert(y.getFullYear());

// USE NEW KEYWORD IN OBJECT

// let person = new Object();

// person.Name = "Milapdeep singh";
// person.Age = 30;

// console.log(person);

let person = {
    name: "Milapdeep singh",
    age:30,
    get getname(){
        return this.name.toUpperCase();
    },
    set setname(n){
        this.name = n.toUpperCase();
    }
};

// person.setname = "Milap";

console.log(person.getname);
