// function Student(first, last, age, cls){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;

// }

// let Student1 = new Student("Milapdeep", "Singh", 30, 5);

// Student.prototype.Nationality = "Indian";

// Student1.name = function(){
//     return this.firstName +" "+ this.lastName; 
// }

// console.log(Student1.Nationality);

// NESTED OBJECT

export let user = {
    name: "Milapdeep Singh",
    email: "abc@gmail.com",
    skills: ["html", "css", "Javasript"],
    personalInfo: {
        bloodGroup: "B+",
        address: {
            houseNumber: "007",
            city: "Amritsar"
        }
        
    }
}

//console.log(user);