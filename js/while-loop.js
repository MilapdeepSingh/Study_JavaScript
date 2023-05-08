let counter = 0;

while(counter <= 10){
    document.write("Hello milapdeep singh" +" "+ "<br>");
    counter++;
}

let x = 1;

while(x <=10){
    document.write(`2 * 1 = ${x*2} <br>`);
    x++;
}

let evennumber = 1;
sum = 0;

while(evennumber <= 256){
    if(evennumber % 2 == 0){
       sum = sum + evennumber;
    }
    evennumber++;
}
document.write(`${sum} <br>`);

let counterdo = 0;

do{
    document.write(`Milapdeep singh do this <br>`);
    counterdo++;
}while(counterdo <= 10);