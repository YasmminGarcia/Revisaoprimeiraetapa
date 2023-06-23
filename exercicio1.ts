const entrada1= require("readline-sync");

let letra: string = entrada1.question("Digite uma letra qualquer: ");

 if(letra == "a" || letra == "e" || letra =="i" ||letra == "o" || letra == "u"  ) {
    console.log(" Esta letra é uma vogal!!");
    
 }
 
 else{
    console.log("Esta letra não é uma vogal e sim uma consoante!");
 }

