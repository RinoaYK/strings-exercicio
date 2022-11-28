// ```
// Estas são as comidas favoritas de nomeDoUsuario
// - Comida1
// - Comida2
// - Comida3
// ```
// Você deve usar apenas um console.log() para isso

// 💡 Dica
// ⭐ Você pode juntar texto com variáveis de duas formas:
// - Concatenando as strings (com o sinal de +)
// - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)

// Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.

const nome = prompt("Qual o seu nome?")
const comida1 = prompt("Qual sua comida favorita?")
const comida2 = prompt("Qual outra comida vc gosta?")
const comida3 = prompt("Digite nais uma comida favorita:")
console.log(`Estas são as comidas favoritas de ${nome}:
- ${comida1}
- ${comida2}
- ${comida3}
`)