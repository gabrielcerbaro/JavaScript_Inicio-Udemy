let lista = document.getElementById('lista')
let adicionarLinha = document.getElementById('adicionarLinha')
let limparLog = document.getElementById('limparLog')

adicionarLinha.addEventListener('click', () => {

    let item = document.createElement('li');
    let texto = document.createTextNode('Item');

    item.appendChild(texto);
    lista.appendChild(item);
})

limparLog.addEventListener('click', ()=>{
    lista.innerHTML = '';
})