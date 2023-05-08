// let person = {
//     Name: "Milapdeep singh",
//     Developer: "Shopify front end",
//     Experence: "4.5 years",
//     Skils: ["html", "Css", "Javascript", "liquid" ],
//     vehical: "Bike & car",
//     sayhello (){
//         console.log("Hello!");
//     }
// }



// person.age = 30;

// delete person.Experence;


// if('vehical' in person){
//     alert("yes");
// }else{
//     alert("No");
// }

// console.log(person);

// for(key in person){
//     document.write(`<p style="font-size: 28px;"><b>${key} :</b> ${person[key]} </p>`)
// }

// person.sayhello = function(){
//     console.log("Hello!");
// }

// person.sayhello();

let person = {
    Name: "Milapdeep singh",
    Developer: "Shopify front end",
    Experence: "4.5 years",
    Skils: ["html", "Css", "Javascript", "liquid" ],
    sayhello (){
        console.log(`Hello ${this.Name} you have a ${vehical.Modal} Car`);
    }
}

console.log(person);

let vehical = {
    Brand: "Hyundai",
    Modal: "Eon"
}
person.sayhello();