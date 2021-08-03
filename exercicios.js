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

// exercício 3 - FizzBuzz

// caso não seja um número, retorne erro
// caso divísivel por 3, retorne fizz
// caso divisível por 5, retorne buzz
// caso divisível por 3 e 5, retorne FizzBuzz
// caso não seja divisível por nenhum deles, retorne o próprio valor

const resultado = FizzBuzz()
console.log(resultado)

function FizzBuzz(entrada){
    if(typeof entrada !== 'number')
    return 'Erro! Não é um número'

    if(entrada % 3 === 0 && entrada % 5 === 0)
    return 'FizzBuzz'

    if(entrada % 3 === 0)
    return 'Fizz'

    if(entrada % 5 === 0)
    return 'Buzz'

    return entrada
}

/**************************************************************************************/

// verificador de velocidade
// velocidade maxima = 70km
// ao passar de 70km, a cada 5km receberá um ponto na carteira
// ao passar de 12 pontos, a carteira será suspensa
// uso do Math.floor para arredondar valores
// criação de consts para refatorar o código

verificarVelocidade();

function verificarVelocidade(velocidade){
const VelocidadeMaximum = 70;
const PontosACada = 5;
const PontosMaximum = 12;
    if(velocidade <= VelocidadeMaximum)
    console.log('Ok');
    
    else{
        const pontos = Math.floor(((velocidade - VelocidadeMaximum)/PontosACada));
        if(pontos >= PontosMaximum)
            console.log('Carteira suspensa')
        else 
            console.log('Pontos: '+pontos);
    }
}

/**************************************************************************************/

// exibir na tela se o número for par ou ímpar
// uso da expressão valor % 2 === 0 para saber se é par, caso contrário, impar

exibirTipo()

function exibirTipo(valor){
    if(valor % 2 === 0)
    console.log(valor+' Par')
    else(console.log(valor+' Impar'))
}


// outra forma de fazer é mostrando todos os valores no console até chegar no indicado, ex:

function TipoDoNumero(valorNumero){
    for (let i = 0; i <= valorNumero; i++){
        if(i % 2 === 0)
            console.log(i+' Par')
        else(console.log(i+' Impar'))
    }
}

/**************************************************************************************/

// como pegar somente a propriedade de um único tipo dentro de um objeto
// caso aconteça de receber o erro 'propriedade não foi definida ' continue tentando, é só uma dica, rs


const filme = {
  título : 'Vingadores',
  ano : 2018,
  diretor : 'Robin',
  personagem : 'Thor'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
  for (prop in obj)
    if(typeof obj[prop] === 'string') // obj[prop] é importante para a definição não ser apenas no objeto e sim na propriedade dentro dela
      console.log(prop+': '+obj[prop])
}
