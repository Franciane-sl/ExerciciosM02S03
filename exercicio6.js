let limite = Number(prompt ("Digite aqui um número limite"));

let primeiroNumero = 0;
let segundoNumero = 1;
let proximaSequencia;
let resultado = "";

while (primeiroNumero <= limite) {
    resultado += primeiroNumero + " ";
    proximaSequencia = primeiroNumero + segundoNumero;
    primeiroNumero = segundoNumero;
    segundoNumero = proximaSequencia;
}

console.log("A Sequencia Fibonacci até " + limite + " é: " + resultado);