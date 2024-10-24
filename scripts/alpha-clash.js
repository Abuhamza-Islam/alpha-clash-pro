// function play(){
//     // hide the home screen . hiding the home screen you should added hidden class then
//     //show the play ground remove the hidden class
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //show the play ground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function continueGame(){
    //step 1: generate a random alphabet;
    const alphabet =getARandomAlphabet();
    console.log('your random alphabet',alphabet);

    //set randomly generated alphabet display
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set backgroud color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

