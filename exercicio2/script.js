const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(`String original:
${minhaString}.fim`);

// A partir dela, execute os passos abaixo:
// a) Remova o excesso de espaços no final da string;
console.log(`\nString sem espaços em branco sobrando:
${minhaString.trim()}.fim`);

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(`\nString original:
${minhaString}, tinha ${minhaString.length} caracteres.

String sem espaços em branco sobrando:
${minhaString.trim()}, , ficou com ${minhaString.trim().length} caracteres.
`);

// c) Substitua os traços ________ por “sticioso”.
console.log(`\nSubstitua os traços ________ por “sticioso”:
${minhaString.replace("________", "sticioso")}`);