// if input = 1, "y", "yes" output = continue...
// if input = 0, "n", "no" output = End...

let input = "no";

if (input === 1 || input === "y" || input === "yes"){
    document.write("continue...");
}else if (input === 0 || input === "n" || input === "no"){
    document.write("End...");
}else{
    document.write("Wrong input...");
}