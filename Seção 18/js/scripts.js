let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// contador de jogadas
let gameOver = false;
let currentPlayer = 'x';
let player1 = 0;
let player2 = 0;

// Adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', function() {
        if(gameOver) {
            return;
        }

        // não deixa jogar em cima
        if(this.childNodes.length > 0) {
            return;
        }

        let el = currentPlayer === 'x' ? x : o;
        let cloneEl = el.cloneNode(true);
        this.appendChild(cloneEl);

        // computar jogada
        if(player1 == player2) {
            // vez do jogador 1 (sempre x)
            player1++;

            // checa vitória antes da IA
            if(checkWinCondition()) {
                return;
            }

            // alterna para o
            currentPlayer = 'o';

            // se for contra IA, ela joga agora
            if(secondPlayer == 'ai-player') {

                computerPlay();
                player2++;

                // depois da IA, volta para x
                currentPlayer = 'x';

                // checa vitória depois da IA
                checkWinCondition();
                return;
            }

        } else {
            // vez do jogador 2 (humano, no modo 2 players)
            player2++;

            // alterna jogador
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';

            // checa vitória
            checkWinCondition();
        }
    });
}


// evento para saber se é dois players ou IA
for(let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function() {

        secondPlayer = this.getAttribute('id');

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function() {
            let container = document.querySelector('#container')
            container.classList.remove('hide');
        }, 500)
    })
}

// ver quem vai jogar
function checkEl() {
    return currentPlayer === 'x' ? x : o;
}

// ve quem ganhou
function checkWinCondition() {
    if(gameOver) return true;

    let b1 = document.getElementById('block-1')
    let b2 = document.getElementById('block-2')
    let b3 = document.getElementById('block-3')
    let b4 = document.getElementById('block-4')
    let b5 = document.getElementById('block-5')
    let b6 = document.getElementById('block-6')
    let b7 = document.getElementById('block-7')
    let b8 = document.getElementById('block-8')
    let b9 = document.getElementById('block-9')

    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if(b1child == 'x' && b2child == 'x' && b3child == 'x') {
            declareWinner('x');
            return true;
        } else if (b1child == 'o' && b2child == 'o' && b3child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if(b4child == 'x' && b5child == 'x' && b6child == 'x') {
            declareWinner('x');
            return true;
        } else if (b4child == 'o' && b5child == 'o' && b6child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b7child == 'x' && b8child == 'x' && b9child == 'x') {
            declareWinner('x');
            return true;
        } else if (b7child == 'o' && b8child == 'o' && b9child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    // vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b1child == 'x' && b4child == 'x' && b7child == 'x') {
            declareWinner('x');
            return true;
        } else if (b1child == 'o' && b4child == 'o' && b7child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if(b2child == 'x' && b5child == 'x' && b8child == 'x') {
            declareWinner('x');
            return true;
        } else if (b2child == 'o' && b5child == 'o' && b8child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b3child == 'x' && b6child == 'x' && b9child == 'x') {
            declareWinner('x');
            return true;
        } else if (b3child == 'o' && b6child == 'o' && b9child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    // diagonais
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b1child == 'x' && b5child == 'x' && b9child == 'x') {
            declareWinner('x');
            return true;
        } else if (b1child == 'o' && b5child == 'o' && b9child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b3child == 'x' && b5child == 'x' && b7child == 'x') {
            declareWinner('x');
            return true;
        } else if (b3child == 'o' && b5child == 'o' && b7child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    // deu velha
    let counter = 0;

    for(let i = 0; i <boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if(counter == 9) {
        declareWinner('Deu velha');
        return true;
    }

    return false;
}

// limpa o jogo, declarara o vencedor e atualiza o placar
function declareWinner(winner) {
    gameOver = true;

    let scoreboardX = document.querySelector('#scoreboard-1')
    let scoreboardY = document.querySelector('#scoreboard-2')
    let msg = '';

    if(winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = 'O jogador 1 venceu';
    } else if(winner == 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = 'O jogador 2 venceu';
    } else {
        msg = 'Deu velha';
    }

    // exibe a mensagem na tela
    messageText.innerHTML = msg;
    messageContainer.classList.remove('hide');

    //esconde a mensagem
    setTimeout(function() {
        messageContainer.classList.add('hide');
        gameOver = false;

        // zera as jogadas
        player1 = 0;
        player2 = 0;

        // remove x e o 
        let boxesToRemove = document.querySelectorAll('.box div')

        for(let i = 0; i < boxesToRemove.length; i++) {
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }

        currentPlayer = 'x';

    }, 3000);
}

//executar a lógica da jogada da CPU
function computerPlay() {

    if(gameOver) return;

    let empty = [];

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes.length == 0) {
            empty.push(boxes[i]);
        }
    }

    if(empty.length == 0) return;

    // IA aleatória corrigida
    let randomIndex = Math.floor(Math.random() * empty.length);
    let box = empty[randomIndex];

    let cloneO = o.cloneNode(true);
    box.appendChild(cloneO);
}
