function dataType (data) {

    if (typeof data === 'string') {
        console.log(`o dado passado (${data}) é uma ${typeof data}`);
    } else if(typeof data === 'number') {
        console.log(`o dado passado (${data}) é uma ${typeof data}`);
    } else {
        console.log(`o dado passado (${data}) é um ${typeof data}`);
    }
    
}

dataType("Gabriel");
dataType(21);
dataType(true);
