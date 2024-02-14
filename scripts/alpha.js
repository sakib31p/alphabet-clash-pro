// function play(){
//     // step - 1: hide the home screen .to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the playground 
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

function handleKeyboardKeyupEvent(event){
    const playerPress = event.key;
    console.log('player press', playerPress);
    // stop the game if pressed Esc
    if(playerPress === 'Escape'){
        gameOver();
    }

    // get expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPress,expectedAlphabet);

    // checked matched or not 
    if(playerPress === expectedAlphabet){
        console.log('you get a point');
        // score update 
        // 1 get the current score 
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // 2 increase the score by 1 
        const newScore = currentScore + 1;
        // 3 show the update score 
        currentScoreElement.innerText = newScore;


        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lost a life');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // step-2 deceise life by 1 
        const newLife = currentLife - 1;
        // step -3 show the update life 
        currentLifeElement.innerText = newLife;
        if(newLife === 0){
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardKeyupEvent);

function continueGame(){
    // step -1: generate alphabet game 
    const alphabet = getARandomAlphabet();
    console.log('your alphabet', alphabet);

    // set randomly generate  alphabet to the screen()
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    // set background 
    setBackgroundColorById(alphabet);


}

function play(){
    // hide every thing show only playground 
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    // reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score 
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    // clear the last selected alphabet 
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}