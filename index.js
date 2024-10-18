let currentIndex = 0;
let mode = 0; // 0: Focus on definition first, 1: Focus on word first
const words = [
    { word: "primeval", definition: "Of or relating to the earliest ages." },
    { word: "distinguish", definition: "Discern, to perceive a difference in." },
    { word: "isolated", definition: "Secluded, occurring alone." },
    // Add more words here...
];

function flipCard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.toggle('flipped');
}

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

function changeStudyMode() {
    const studyMode = document.getElementById('studyMode').value;
    mode = studyMode === 'definitionFirst' ? 0 : 1;
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.remove('flipped'); // Ensure it is not flipped
    updateCardContent();
}

function previousCard() {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    updateCard();
}

function nextCard() {
    currentIndex = (currentIndex + 1) % words.length;
    updateCard();
}

function updateCard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.remove('flipped'); // Ensure it is not flipped
    updateCardContent();
}

// Event listeners
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
