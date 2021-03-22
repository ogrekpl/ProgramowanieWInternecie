var divValues = [0,0,0,0,0,0,0,0,0];
var gameEnd = false;
var gameType = 1;
var player = 1;

function restartGame() {

    for (let i = 0; i < divValues.length; i++){
        divValues[i] = 0;
    }

    let divKontenery = document.getElementsByClassName('kontener');

    for (let i = 0; i < divKontenery.length; i++){
        divKontenery[i].style.backgroundColor = 'gray';
    }

    gameEnd = false;
}

function startGameFor1Player() {
    gameType = 1;
    player = 1;
    restartGame();
    addTextToAddition('<h2>Gra z komputerem</h2>');
}

function startGameFor2Player() {
    gameType = 2;
    player = 1;
    restartGame();
    addTextToAddition('<h2>Gra z człowiekiem</h2>');
}

function addTextToAddition(text) {
    let div = document.getElementById('addition');
    div.innerHTML = text;
}

function clickDiv(id) {
    if (divValues[parseInt(id)] === 0 && gameEnd === false)
    {
        let element = document.getElementById(id);
        if (player === 1){
            element.style.backgroundColor = 'blue';
            divValues[parseInt(id)] = 1;
        } else {
            element.style.backgroundColor = 'orange';
            divValues[parseInt(id)] = -1;
        }

        let isEnd = checkGameStatus();

        if (isEnd) {
            addTextToAddition('<h1>Remis</h1>');
            return true;
        } else {
            let isWon = checkIfWonGame();
            if (isWon) {
                if (gameType === 1){
                    addTextToAddition('<h1>Wygrałeś!!!</h1>');
                } else {
                    addTextToAddition('<h1>Wygrał gracz: ' + player + '!!!</h1>');
                }

                gameEnd = true;
            }
        }

        if (gameType === 1 && gameEnd === false)
        {
            aIPlay();
        }

        if (gameType === 2 && gameEnd === false){
            if (player === 1){
                player = 2;
            } else {
                player = 1;
            }
        }
    }
}

function checkGameStatus() {
    for (let i = 0; i < divValues.length; i++){
        if (divValues[i] === 0){
            return false;
        }
    }

    return true;
}

function checkIfWonGame() {
    if (divValues[0] === divValues[1] && divValues[0] === divValues[2] && divValues[0] !== 0 && divValues[1] !== 0 && divValues[2] !== 0){
        return true;
    }

    if (divValues[3] === divValues[4] && divValues[3] === divValues[5] && divValues[3] !== 0 && divValues[4] !== 0 && divValues[5] !== 0){
        return true;
    }

    if (divValues[6] === divValues[7] && divValues[6] === divValues[8] && divValues[6] !== 0 && divValues[7] !== 0 && divValues[8] !== 0){
        return true;
    }

    if (divValues[0] === divValues[3] && divValues[0] === divValues[6] && divValues[0] !== 0 && divValues[3] !== 0 && divValues[6] !== 0){
        return true;
    }

    if (divValues[1] === divValues[4] && divValues[1] === divValues[7] && divValues[1] !== 0 && divValues[4] !== 0 && divValues[7] !== 0){
        return true;
    }

    if (divValues[2] === divValues[5] && divValues[2] === divValues[8] && divValues[2] !== 0 && divValues[5] !== 0 && divValues[8] !== 0){
        return true;
    }

    if (divValues[0] === divValues[4] && divValues[0] === divValues[8] && divValues[0] !== 0 && divValues[4] !== 0 && divValues[8] !== 0){
        return true;
    }

    if (divValues[2] === divValues[4] && divValues[2] === divValues[6] && divValues[2] !== 0 && divValues[4] !== 0 && divValues[6] !== 0){
        return true;
    }

    return false;
}

function aIPlay(){
    let randomNumber;
    let more;
    do {
        randomNumber = Math.floor(Math.random() * 9);

        if (divValues[randomNumber] === 0){
            more = false;
        }else{
            more = true;
        }

    } while(more);

    let element = document.getElementById(randomNumber.toString());
    element.style.backgroundColor = 'orange';
    divValues[randomNumber] = -1;

    let isEnd = checkGameStatus();

    if (isEnd) {

    } else {
        let isWon = checkIfWonGame();
        if (isWon) {
            addTextToAddition('<h1>Przegrałeś</h1>');
            gameEnd = true;
        }
    }
}
