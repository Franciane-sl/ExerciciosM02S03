const fraseUsuario = prompt("Digite aqui uma frase.");
const palavras = fraseUsuario.split(" ");

for (let i = 0; i < palavras.length; i++){
    palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substring(1);
}

console.log("A frase original é:", fraseUsuario);
console.log("A frase manipulada é:", palavras.join(" "));

