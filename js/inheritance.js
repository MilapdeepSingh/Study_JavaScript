class emp {
    constructor(n) {
        this.name = n;
    }
    msg() {
        console.log("Hi...")
    }
}

class manager extends emp {
    constructor(n, d) {
        super(n);
        this.department = d;
    }
    msg(){
        console.log("Hello...")
    }
    info(){
        super.msg();
        this.msg();
        console.log(`${this.name} is manager of ${this.department} department`)
    }
}

class admin extends manager {

}
let admin1 = new admin("Milapdeep Singh", "Web development");

console.log(admin1);