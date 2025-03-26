let randomNumber=parseInt(Math.random()*100 +1);
let userInput=document.getElementById('inputs');
const submit=document.querySelector("#submit");
const loworhig=document.querySelector("#loworhig");
const guessSlot=document.querySelector("#preguess");
const remGuess=document.querySelector('#remguess')
const startOver=document.querySelector('.resultParas')
const p = document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(guess<1){
        alert("Please enter number greater than 0");
    }else if(guess>100){
        alert("Please enter number less than 100");
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`<h2>Game Over😒 number was ${randomNumber}</h2>`);
            endGame();

        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`<h2>you guessed it right👍🫡</h2>`)
        displayMessage(`<h1>you guessed it right 🫡</h1>`)

    }else if(guess<randomNumber){
        displayMessage(`<h2>toooo low🙄</h2>`)
    }else if(guess>randomNumber){
        displayMessage(`<h2>toooo HiGh🙄</h2>`)
    }
}
function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}, `;
    numGuess++;
    remGuess.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
    loworhig.innerHTML=`<h3>${message}</h3>`
}
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newgameButton=document.querySelector('#newGame')
    newgameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100 +1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remGuess.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}