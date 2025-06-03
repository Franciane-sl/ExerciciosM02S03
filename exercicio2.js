const capitalInicial = prompt("Digite aqui o seu capital inicial.");
const mesesDaAplicacao = prompt("Digite aqui por quantos meses o seu investimento sera aplicado.");

const capitalComposto = (+capitalInicial * (1 + 0.05) ** +mesesDaAplicacao);

console.log("O capital inicial é:", capitalInicial);
console.log("O periodo de aplicação é:", mesesDaAplicacao);
console.log("O resultado do capital composto é:", capitalComposto.toFixed(3));