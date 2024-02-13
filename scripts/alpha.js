// function play(){
//     // step - 1: hide the home screen .to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the playground 
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }


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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}