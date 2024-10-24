// function play(){
//     // hide the home screen . hiding the home screen you should added hidden class then
//     //show the play ground remove the hidden class
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //show the play ground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    
    // console.log('player pressed',event.key);
    //stop the game if pressed 'ESC'
    if(playerPressed === 'Escape'){
        gameOver();
    }
  
    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    // console.log(currentAlphabetElement);
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);

    //cheak match or not
    if(playerPressed === expectedAlphabet){
        // console.log('you get a point');
        const currentScore =  getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);

         //---------------------------------------
        //update score
        //1.get the current score;
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log('current score:',currentScore);     
        // //2.increase the score by 1;
        // const newScore = currentScore + 1;
        // //3.show the updated score;
        // currentScoreElement.innerText = newScore;

        

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // console.log('you missed. you lost a life');
        const currentLife =getTextElementValueById('current-life');
        // console.log(currentLife,'this is current life')
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
        // ---------------------        
        //step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentlifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentlifeText);
        // //step-2: reduce the life count
        // const newLife = currentLife - 1;
        // //step-3: display the update life count
        // currentLifeElement.innerText = newLife;
        // -----------

    }
}
//capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress)

function continueGame(){
    //step 1: generate a random alphabet;
    const alphabet =getARandomAlphabet();
    // console.log('your random alphabet',alphabet);

    //set randomly generated alphabet display
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set backgroud color
    setBackgroundColorById(alphabet);
}

function play(){
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);


    continueGame();
}


function  gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //update finalscore
    //get the final score
    const lastScore = getTextElementValueById('current-score');
    // console.log(lastScore,'laaaaaaaastt scsore');
    setTextElementValueById('last-score',lastScore);
    //clear the last selected that is highlighted
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet,'alpaaaaaaaaaaabet');
    removeBackgroundColorById(currentAlphabet);
    
    }

