let currentIndex = 0;
let mode = 0; // 0: Focus on definition first, 1: Focus on word first
//import words from './words.js'
//onst words = [
//   
//;


// card flipping animation
function flipCard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.toggle('flipped');
}
function changeStudyMode() {
    const studyMode = document.getElementById('studyMode').value;
    mode = studyMode === 'definitionFirst' ? 0 : 1;
    const flashcard = document.querySelector('.flashcard'); 
    flashcard.classList.remove('flipped'); // Ensure it is not flipped
    updateCardContent();
}
// surprisingly hard card updating
//function updateCardContent() {
//    const wordElement = document.getElementById('word');
//    const definitionElement = document.getElementById('definition');
//    const flashcardInner = document.querySelector('.flashcard-inner');
//
//    // Update the texts based on the current card
   //wordElement.textContent = words[currentIndex].word;
   //definitionElement.textContent = words[currentIndex].definition;

    // Adjust the layout based on the mode
function updateCardContent() {
    const wordElement = document.getElementById('word');
    const definitionElement = document.getElementById('definition');
    const flashcardInner = document.querySelector('.flashcard-inner');
    const front = flashcardInner.querySelector('.flashcard-front h1');
    const back = flashcardInner.querySelector('.flashcard-back h1');
    wordElement.textContent = words[currentIndex].word;
    definitionElement.textContent = words[currentIndex].definition;

    const currentWord = words[currentIndex];

    if (mode === 0) {
        // Word first: 앞면 - 단어 / 뒷면 - 뜻
        front.textContent = currentWord.word;
        back.textContent = currentWord.definition;

        front.id = "word";
        back.id = "definition";
    } else {
        // Definition first: 앞면 - 뜻 / 뒷면 - 단어
        front.textContent = currentWord.definition;
        back.textContent = currentWord.word;

        front.id = "definition";
        back.id = "word";
    }
}

// menu


// controls
function previousCard() {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    updateCard();
}

function nextCard() {
    currentIndex = (currentIndex + 1) % words.length;
    updateCard();
}

// Modify the updateCard function
function updateCard() {
    const flashcard = document.querySelector('.flashcard');
    const isFlipped = flashcard.classList.contains('flipped');

    if (isFlipped) {
        // If the card is flipped, unflip it first
        flashcard.classList.remove('flipped');
        
        // Wait for the flip animation to complete before updating content
        setTimeout(() => {
            //updateCardContent();
            changeStudyMode();
        }, 300); // 300ms matches the flip animation duration
    } else {
        // If the card is not flipped, update content immediately
        //updateCardContent();
        changeStudyMode();
    }
}

// Modify the flipCard function to use a callback


// Modify the event listener for spacebar
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        flipCard();
        event.preventDefault();
    }
    if (event.code === 'ArrowLeft') {
        previousCard();
    }
    if (event.code === 'ArrowRight') {
        nextCard();
    }
});

// Initial card update
updateCard();

