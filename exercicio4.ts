const entrada4 = require("readline-sync");


let palavra: string = entrada4.question("Digite uma palavra: ");

let palindromo: boolean = true;

for (let i = 0; i < palavra.length / 2; i++) {
  if (palavra[i] !== palavra[palavra.length - 1 - i]) {
    palindromo = false;
    break;
  }
}

if (palindromo) {
  console.log('É um palindromo!!');
} else {
  console.log('Não é um palindromo');
}