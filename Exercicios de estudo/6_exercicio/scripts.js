let lista = document.getElementById('lista')
let input = document.getElementById('input')
let btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener('click', () => {
    
    if (input.value === "") {
        alert('Precisa ter um commit escrito');
    } else {
        event.preventDefault()
        let commit = input.value;
        let item = document.createElement('li')
        
        item.textContent = commit + ' ' + new Date().toLocaleTimeString();
        lista.insertBefore(item, lista.firstChild);
    }
    
})

