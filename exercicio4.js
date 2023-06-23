var entrada4 = require("readline-sync");
var palavra = entrada4.question("Digite uma palavra: ");
var palindromo = true;
for (var i = 0; i < palavra.length / 2; i++) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        palindromo = false;
        break;
    }
}
if (palindromo) {
    console.log('É um palindromo!!');
}
else {
    console.log('Não é um palindromo');
}
