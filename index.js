let currentIndex = 0;
let mode = 0; // 0: Focus on definition first, 1: Focus on word first
import words from 'words.js'
//words


// card flipping animation
function flipCard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.toggle('flipped');
}

// surprisingly hard card updating
function updateCardContent() {
    const wordElement = document.getElementById('word');
    const definitionElement = document.getElementById('definition');
    const flashcardInner = document.querySelector('.flashcard-inner');

    // Update the texts based on the current card
    wordElement.textContent = words[currentIndex].word;
    definitionElement.textContent = words[currentIndex].definition;

    // Adjust the layout based on the mode
    if (mode === 1) { // Definition first
        flashcardInner.innerHTML = `
            <div class="flashcard-front">
                <h1 id="definition">${words[currentIndex].definition}</h1>
            </div>
            <div class="flashcard-back">
                <h1 id="word">${words[currentIndex].word}</h1>
            </div>
        `;
    } else { // Word first
        flashcardInner.innerHTML = `
            <div class="flashcard-front">
                <h1 id="word">${words[currentIndex].word}</h1>
            </div>
            <div class="flashcard-back">
                <h1 id="definition">${words[currentIndex].definition}</h1>
            </div>
        `;
    }
}

// menu
function changeStudyMode() {
    const studyMode = document.getElementById('studyMode').value;
    mode = studyMode === 'definitionFirst' ? 0 : 1;
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.remove('flipped'); // Ensure it is not flipped
    updateCardContent();
}

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
            updateCardContent();
        }, 300); // 300ms matches the flip animation duration
    } else {
        // If the card is not flipped, update content immediately
        updateCardContent();
    }
}

// Modify the flipCard function to use a callback
function flipCard(callback) {
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.toggle('flipped');
    
    if (callback) {
        setTimeout(callback, 300); // Call the callback after the flip animation
    }
}

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

