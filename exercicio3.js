var entrada3 = require("readline-sync");
var nota = parseFloat(entrada3.question("Digite sua nota do semestre: "));
if (nota >= 7) {
    console.log(" Aprovado, parabéns!!");
}
else {
    console.log("Reprovado!");
}
