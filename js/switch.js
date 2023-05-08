let input;

input = "N";

switch(input){
    case 1:
        document.write("Continue...");
        break;
    case "Y":
        document.write("Continue...");
        break;  
    case "YES":
        document.write("Continue...");
        break;
    case 0:
        document.write("End...");
        break; 
    case "N":
        document.write("End...");
        break; 
    case "N0":
        document.write("End...");
        break;
    default:
        document.write("Wrong input");                              
}