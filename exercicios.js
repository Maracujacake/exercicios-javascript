// Exercício 1
// Trocando o valor de variáveis

let a = 'batatadoce';
let b = 'batatasalgada';

// para inverter o valor das duas é necessário uma terceira variável

let c = a;
a = b;
b = c; // logo, b = a

/**************************************************************************************/

// Exercício 2
// Máximo entre dois valores

let maiorValor = valorMaximo(2,7)

function valorMaximo(numero1,numero2){
    if(numero1>numero2)
    return numero1; // pois é maior
    else return numero2; // caso contrário, o outro
}


/* Uma forma mais clean do código seria: */

let maiorValor = valores(1, 7)

function valores(valor1, valor2){
    return valor1 > valor2 ? valor1 : valor2
}

/**************************************************************************************/