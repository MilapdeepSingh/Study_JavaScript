// Map function with arrow function

let listNum = [2, 4, 5, 6, 99];

let listNum2 = listNum.map( x => x*2);

console.log(listNum2);


// Filter function
let listNumNew = [2, 4, 5, 6, 99, 55, 48, 80, 3];

// let listNumNew2 = listNumNew.filter( x => x%2 == 0);

let listNumNew2 = listNumNew.filter(function(x){
   if(x%3 == 0){
      return x;
   }
});

console.log(listNumNew2);