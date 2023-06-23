var entrada2 = require("readline-sync");
var ano = parseFloat(entrada2.question("Digite um ano : "));
if (ano % 4 == 0) {
    console.log(" Esse ano é bissexto!!");
}
else {
    console.log("Esse ano não é bissexto!");
}
