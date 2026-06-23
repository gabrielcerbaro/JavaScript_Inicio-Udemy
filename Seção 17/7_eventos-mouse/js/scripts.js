let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')

btn1.addEventListener('mousedown', () => {

    console.log('Clicou no botão');
})

btn1.addEventListener('mouseup', () => {

    console.log('Soltou no mouse');
})

btn2.addEventListener('dblclick', () => {

    console.log('Clicou duas vezes')
})

btn2.addEventListener('contextmenu', (e) => {

    e.preventDefault();
    console.log('Clicou com o botão direito')
})