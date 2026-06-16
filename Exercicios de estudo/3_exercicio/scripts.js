let status = document.getElementById('deploy');
let fazerDeploy = document.getElementById('fazerDeploy');
let reverterDeploy = document.getElementById('reverterDeploy');

fazerDeploy.addEventListener('click', () => {

    if(status.textContent === 'Aguardando') {
        status.textContent = 'Deploy feito';
        status.style.backgroundColor = 'green';
    }

})

reverterDeploy.addEventListener('click', () => {

    if(status.textContent === 'Deploy feito') {
        status.textContent = 'Aguardando'
        status.style.backgroundColor = 'grey';
    }

})

