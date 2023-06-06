function sayHello(){
    console.log("Hello...");
}
function sayHi(){
    console.log("Hi...");
}
function add(num1, num2, callfunction){
    console.log(num1+ num2);
    callfunction();
}
add(10,15,sayHello);
add(15,15,sayHi);

add(25,25, function(){
    console.log("New function!")
});

let list = [12,66,69,87,64,4];

let listNew = list.map((val) => val **3);
console.log(listNew)

let list2 = list.filter(v =>  v > 10);

console.log(list2);