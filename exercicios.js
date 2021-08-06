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


/**************************************************************************************/

// função para somar apenas os múltiplos de 3 e 5;
// o operador += foi usado para o valor não ser apenas reescrito
// a lógica é a mesma da função em que vemos se o número é par ou ímpar

somar(10)
function somar(nlimite){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    
    for(i = 0; i <= nlimite; i++){
        if(i % 3 === 0)
        multiplosDe3 += i;
        
        if(i % 5 === 0)
        multiplosDe5 += i;
    }
    
    console.log(multiplosDe3 + multiplosDe5)
    
}

/**************************************************************************************/

// função para exibir a média das notas de um aluno
// returns feitos de forma clean ao invés de fazer algo do tipo if media > 0 && media < 59;
// caso não satisfaça a primeira lei do 'if', tentará a segunda, até chegar a uma que dê resultado

const array = [80,80,90]
console.log(mediaDoAluno(array))

function mediaDoAluno(notas){
    let soma = 0;
    for(nota of notas){
        soma += nota;
    }

    const media = soma/(notas.length)

    if(media < 59) return 'F'
    if(media < 69) return 'D'
    if(media < 79) return 'C'
    if(media < 89) return 'B'
    return 'A'
}

// outra forma mais clean de escrever o código seria não deixando tudo em uma única função

function mediaAleatoria(valorrr){
    const media = CalcularMedia(valorrr) // colocar o parametro 
    if(media < 59) return 'F'
    if(media < 69) return 'D'
    if(media < 79) return 'C'
    if(media < 89) return 'B'
    return 'A'

}

function CalcularMedia(valoress){
    let soma = 0;
    for(valor of valoress){
        soma += valor
    }

    return soma/valoress.length
}

/**************************************************************************************/

// exercício para fixação de nested loop
// loops dentro de loops
// mostrar o número de asteriscos na tela(ex) de acordo com o valor escolhido

MostrarEstrelinha(2)

function MostrarEstrelinha(numeroescolhido){
    let ndefault = ''
    for(let numberEx = 1; numberEx <= numeroescolhido; numberEx++){
        ndefault += '*'
        console.log(ndefault)
    }
}

// agora usando o loop nested:

MostrarAsterisco(12)

function MostrarAsterisco(numeroaleatorio){
    for(let numeroEx2 = 1; numeroEx2 <= numeroaleatorio; numeroEx2++){
        let padrao = '';
            for(let i = 0; i < numeroEx2; i++){
                padrao += '*'
            }
            console.log(padrao)
    }
}

/**************************************************************************************/

// função para exibir somente numeros primos dentro de um limite
// usando loop nested


ExibirSomenteOsPrimos(20)
function ExibirSomenteOsPrimos(numerolimite){
    for(let numerorandom = 2; numerorandom <= numerolimite; numerorandom++){
        let EhPrimo = true;

        for(let divisor =2; divisor < numerorandom; divisor++){
            if(numerorandom % divisor === 0){
                EhPrimo = false;
                break;
            }
        }  if(EhPrimo) console.log(numerorandom)
    }
}


// uma forma refatorada da função, seja para maior otimização ou para maior organização do código é:

ExibirLosPrimitos(12)
function ExibirLosPrimitos(limitastico){
    for(numbersito = 2; numbersito <= limitastico; numbersito++){

        if(EhPrimoMesmo(numbersito)) console.log(numbersito)
    }
}


function EhPrimoMesmo(numbersito){
    for(let divisorito = 2; divisorito < numbersito; divisorito++){
        if(numbersito % divisorito === 0){
            return false;
        }
    } return true;
}

// removido o break pois não é dentro do loop que ele será feito
// removido as variaveis pois é uma função que pode ser reutilizada ou seja apenas retornar é melhor
// chamar a função no lugar do que era as variaveis levando um numero como parametro; neste caso numbersito

/**************************************************************************************/

// factory function
// utilizada para quando há muitos objetos a serem criados ou mostrado na tela

function criarCarro(marca,motor,traçao){
    return{
        marca,
        motor,
        traçao,

        construindoCarro(){
            console.log('construindoCarro')
        }
    }
}

const Carro1 = criarCarro('Wolksvagen', '1.6', '4x4');
const Carro2 = criarCarro('Ford', '2.0', '4x4');

// para que não seja necessário repetir uma mesma função inúmeras vezes

/**************************************************************************************/