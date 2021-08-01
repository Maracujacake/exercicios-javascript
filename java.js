let addAoClicarBotao = document.getElementById('addToDo');
let ContainerToDo = document.getElementById('toDoContainer');
let CampoNecessario = document.getElementById('inputField');


addAoClicarBotao.addEventListener('click', function(){
    let paragrafo = document.createElement('p')
    paragrafo.innerText = CampoNecessario.value;
    ContainerToDo.appendChild(paragrafo);
    CampoNecessario.value = ""
    CampoNecessario.style.border = '1px solid red'
    paragrafo.addEventListener('click', function(){
    paragrafo.style.textDecoration = 'line-through'
    paragrafo.style.color = 'red'
    })

    paragrafo.addEventListener('dblclick', function(){
        ContainerToDo.removeChild(paragrafo);
    })

    paragrafo.style.cursor = 'pointer'
})

  