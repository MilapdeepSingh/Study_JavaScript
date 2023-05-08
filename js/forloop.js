for(let counter = 1; counter <= 10; counter++){
    document.write(`This is a for loop ${counter} <br>`);
}

for(let counter = 1; counter <= 10; counter++){
    if(counter==5){
        break;
    }
    document.write(`This is break in for loop ${counter}<br>`);
}

for(let counter = 1; counter <= 10; counter++){
    if(counter==5){
        continue;
    }
    document.write(`This is continue in for loop ${counter}<br>`);
}

for (let counter =1; counter <=10; counter++){
    document.write(`${counter}<br>`);
    for(counter2 = 1; counter2 <=3; counter2++){
        document.write(`nestedfor${counter2}<br>`)
    }
}

outer:for(i=1; i<=10; i++){
    document.write(`Milapdeep`)
    for(x=1; x<=1; x++){
        if (i == 4){
            break outer;
        }
        document.write(` Singh<br>`);
    }
}