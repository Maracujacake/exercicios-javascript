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

