const dia = prompt("Digite aqui um dia:");
const mes = prompt("Digite aqui um mês:");
const ano = prompt("Digite aqui um ano:");

let dataValida = false;

if (+ano >=0 && +ano <=9999 && +mes >=1 && +mes <=12) {
    if((+mes === 1 || +mes === 3 || +mes === 5 || +mes === 7 || +mes === 8 || + mes === 10 || +mes === 12) && +dia >=1 && +dia <= 31){
        dataValida = true;
    }else if ((+mes === 4 || +mes === 6 || +mes === 9 || +mes === 11) && +dia >=1 && +dia <= 30){
        dataValida = true;
    }else if(+mes === 2 && +dia >=1 && +dia <= 28){
        dataValida = true;
    }
} 

if (dataValida) {
    console.log("Data válida");
} else {
    console.log("Data inválida");   
}