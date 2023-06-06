localStorage.setItem("FirstName", "Milapdeep");
localStorage.setItem("FirstName", "Singh");
localStorage.setItem("location", "Mohali");
// localStorage.removeItem("location");
let loc = localStorage.getItem('location');
// if (loc === 'Amritsar'){
//     alert("y")
// }else{
//     alert("n")
// }
 sessionStorage.setItem("NewName", "Harpreet");
let newName = sessionStorage.getItem("NewName");

alert(newName);