const matriz = prompt("Digite um número.");

for (let i = 0; i < matriz; i++) { 
    let linha = ""; 
    for (let j = 0; j < matriz; j++) { 
        if (i === j) {
            linha += "1"; 
        } else {
            linha += "0"; 
        }
    }
    console.log(linha); 
}
