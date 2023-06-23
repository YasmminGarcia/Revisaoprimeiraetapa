const entrada3= require("readline-sync");

let nota: number = parseFloat(entrada3.question("Digite sua nota do semestre: "));

 if(nota >=7  ) {
    console.log(" Aprovado, parabéns!!");
    
 }
 
 else{
    console.log("Reprovado!");
 }
