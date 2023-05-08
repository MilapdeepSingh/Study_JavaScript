function table2(num){
    for(i=1; i<=10; i++){
        document.write(`${num} x ${i} = ${num *i} <br>`);
    }
}
table2(2);
// document.write(`<br> <br>`);
// table2(19.23);
// document.write(`<br> <br>`);
// table2(20.3);
// document.write(`<br> <br>`);
// table2(21);

// add two parameters

// function add(num1, num2){
//     document.write(`<h1> ${num1 + num2} </h1>`)
// }

// add(5556, 66252);

// The arguments objects

// function add(){
//     if(arguments.length == 0){
//         document.write(`<h1>No arguments passed!<h1>`)
//     }else{
//         let sum = 0;
//         for(i=0; i<arguments.length; i++){
//             sum = sum + arguments[i];
//         }
//         document.write(`<h1>${sum}<h1>`)
//     }
// }

// add();

// FUNCTION RETURN
// function compare(a, b){
//     if(a>b){
//         return 1;
//     }else if(a<b){
//         return -1;
//     }else{
//         return 0;
//     }
// }
// let c = compare(4, 4);

// document.write(`<h1>${c}</h1>`);

// IMMEDIATELY INVOKED FUNCTION

(function(){
    let wordstr = "hello world";
    alert(wordstr)
})();
