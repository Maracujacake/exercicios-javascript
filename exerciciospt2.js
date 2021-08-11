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