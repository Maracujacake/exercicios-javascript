// adicionar elementos em um array mesmo ele sendo uma constante (inalterável);

    // 3 propriedades { unshift, push e splice}

    const numerosaleatorios = [4,5,6];
    // para colocar no inicio
    numerosaleatorios.unshift(3);
    //para colocar no final
    numerosaleatorios.push(7);
    // para colocar no meio, indicando o lugar
    numerosaleatorios.splice(4,0,'penultimo');
    // indique o indice, o que quer excluir e o valor
    console.log(numerosaleatorios);

   /**************************************************************************************/

    // verificação se há algum elemento dentro de um array

    const muitoselementos = ['abc',5,8,'showdebola','chocolate'];
    muitoselementos.indexOf(5); // vai mostrar em qual índice está o 5 SE ele existir dentro do array
    // caso o elemento não existe, vai retornar -1;
    muitoselementos.lastIndexOf(8); // retorna o índice da ULTIMA APARIÇÃO do elemento

    muitoselementos.includes('abc'); // retorna um true se existir dentro do array e um false caso não exista

    /**************************************************************************************/

    // Achar elementos dentro de um array de objetos ou dentro de um objeto 

    const carros = [
        {marca: 'wolksvagen', motor: '1.6v'},
        {marca: 'peugeot', motor: '2.0v'},
        {marca: 'ferrari', motor: '2.5v'}
    ];

    const acharCarros = carros.find(function(Carros){
        return Carros.marca === 'wolksvagen'
    });
    console.log(acharCarros);

    /**************************************************************************************/

    // arrow function

    // ao invés da palavra function utilizamos ' => ' ; já conta com o return

    const numerosta = [
        {id: 1, nome:'numero1'},
        {id: 2, nome:'numero2'}
    ]

    numerosta.find( (acharnumero) => acharnumero.id === 1 )
    // ao dar console.log, vai mostrar o numero1


    /**************************************************************************************/

    // remover elementos de um array;
    // tres propriedades
    // pop
    // shift
    // splice (de novo);

    const exemplodenumerosaleatorios = [1,2,3,4,5,6];

    exemplodenumerosaleatorios.pop(); // remove o ultimo numero
    exemplodenumerosaleatorios.unshift(); // remove o primeiro numero
    exemplodenumerosaleatorios.splice(3,1); // remove o numero quatro pois está no 3° indice

/**************************************************************************************/


    // apagando elementos de um array

   /* let aleatoriedade = ['a', 1, 'b', 2, 'c'];
    let xubs = aleatoriedade;

    aleatoriedade = [];
    console.log(xubs) */

    // nao apaga as referencias
    //******************************************* */
    let aleatoriedade = ['a', 1, 'b', 2, 'c'];
    let xubs = aleatoriedade;

    aleatoriedade.length = 0;
    console.log(xubs)

    // melhor metodo 

    /************************************************ */

    
/**************************************************************************************/

    // juntando e separando arrays

    // Concat( ) e Slice( )

    let alfabetismo = ['a','b','c'];
    let alfabetismo2 = ['d','e','f'];

    const juntarOsDois = alfabetismo.concat(alfabetismo2);

    juntarOsDois.slice(8);

/**************************************************************************************/

// nova forma de clonar e concatenar arrays do ecmascript 6
// operador spread

const bolos1 = ['bolo1','bolo2','bolo3'];
const bolos2 = ['bolo4','bolo5','bolo6'];

const concatenando = [...bolos1,...bolos2];
// pode-se escrever dentro do novo array gerado, ex:
const concatenando2 = [...bolos1,'escrevendo',...bolos2];

/**************************************************************************************/

//forEach [substituindo o for of];

const nomes = ['Pedro','Joao','Gabriel','Julia','Luiza'];

/*nomes.forEach(function(nome){
    console.log(nome)
})*/

// melhor prática seria usar com a arrow function:

nomes.forEach(nome =>{
    console.log(nome)
});

/**************************************************************************************/

// split e join ( manipular entre as palavras ) 

// join serve para adicionar algo entre todos os elementos
//ex:

const animais = ['zebra','leao','papagaio','carrapato','cachorro'];
const join = animais.join('-')
// todas as palavras serão espaçadas por um -

// split serve para separar as palavras em certo elemento, por exemplo

const fraseDeComida = 'Eu gosto muito de sopa, hmmm... Uma sopa quentinha cairia bem';
const splitando = fraseDeComida.split(' ');
// depois de cada espaço, ou seja ' ', o código vai ser quebrado, isolando assim cada palavra


/**************************************************************************************/

// utilizando o prompt
// prompt é uma caixa de texto onde o usuário coloca um valor e dependendo do valor podemos fazer algo
// ex: 

const idade = prompt('Qual a sua idade?')

if(idade < 18){
  console.log('Menor de idade')
}
else{
  console.log('maior de idade')
}

// sempre armazenar o prompt dentro de uma constante ou variável para poder ser utilizada depois