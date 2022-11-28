// A partir da frase a seguir, faça o que se pede
// a) Crie uma const no seu código para guardar a frase (com aspas e tudo);
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';
console.log(frase);

// b) Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;
const novaS = frase.replace("azul", "laranja").replace("verde", "rosa");
console.log("");
console.log(novaS);

// c) Verifique se a nova string inclui verde, e se inclui laranja.
console.log(`\nNa frase "${novaS}", tem "verde"? ${novaS.includes("verde")}

Na frase "${novaS}", tem "laranja"? ${novaS.includes("laranja")}`);

// EXTRA: tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
const gato = "mas não deixe o gato sair."
console.log(`\nJorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, ${gato.toUpperCase()}`);