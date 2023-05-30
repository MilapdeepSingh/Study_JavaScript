// Mixin
let userFullMethod = {
    sayHi(){
        console.log("Hi...")
    },
    sayBye(){
        console.log("Bye...")
    }
}
class user{
    constructor(n){
        this.name = n;
    }
};

let usr1 = new user("Milapdeeep Singh");

Object.assign(user.prototype, userFullMethod)

console.log(usr1.sayHi());
console.log(usr1);