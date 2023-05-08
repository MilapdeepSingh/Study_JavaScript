// let book = ["math", "hindi", "pubjabi", "English"];
// let arrjoin = arr.join(', ');
// console.log(arrjoin);

// arr[1] = 200;

// console.log(arr);

// let text = "This is random text";
// console.log(text);
// let textarray = text.split(' ');
// console.log(textarray);

// let book2 = ["history", "Geography"];

// let book3 = ["urdu", "tamil"];

// let newbook = book.concat(book2, book3);

// console.log(newbook);

// Multdemational array

// let subjet = [
//     ["Math", "98"],
//     ["Science", "88"],
//     ["Punjbai", "99"]
// ]
// document.write(subjet);
// console.log(subjet[1]);

let book = ["math", "hindi", "pubjabi", "English"];

for(i=0; i<book.length; i++){
    document.write(`Element ${i} is ${book[i]}<br>`);
}

book.forEach(myfu);

function myfu(val, index){
  console.log(`${val} ${index}`);
}


