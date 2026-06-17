let checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach((check) => { 
    check.addEventListener('change', () => {
    
        let li = check.parentElement;

        if(check.checked) {
            li.classList.add('done')
        } else {
            li.classList.remove('done')
        }    

    });
});