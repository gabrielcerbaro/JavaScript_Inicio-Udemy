// window.addEventListener('load', () => {

//     alert("Aceite os termos e condições antes de continuar");
// });

window.addEventListener('beforeunload', (e) => {
    event.returnValue = null;
})