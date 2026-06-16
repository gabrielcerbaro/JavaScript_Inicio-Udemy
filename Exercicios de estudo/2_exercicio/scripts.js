
let status = document.getElementById('status');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    
    if(status.textContent === 'Offline') {
        status.textContent = 'Online'
    } else {
        status.textContent = 'Offline'
    }

});

