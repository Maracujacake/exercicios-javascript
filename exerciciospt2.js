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

