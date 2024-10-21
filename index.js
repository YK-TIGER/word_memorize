let currentIndex = 0;
let mode = 0; // 0: Focus on definition first, 1: Focus on word first

//words
const words = [
    { word: "primeval", definition: "Of or relating to the earliest ages." },
    { word: "distinguish", definition: "Discern, to perceive a difference in." },
    { word: "isolated", definition: "Secluded, occurring alone." },
    { word: "extraordinary", definition: "Going beyond what is usual, regular, or customary." },
    { word: "apparition", definition: "An unusual or unexpected sight." },
    { word: "dismantle", definition: "To take a machine apart or to come apart into separate pieces." },
    { word: "misfortune", definition: "Bad luck, or an unlucky event." },
    { word: "reverie", definition: "Daydreaming." },
    { word: "proposal", definition: "An act of putting forward or stating something for consideration." },
    { word: "attire", definition: "Clothes." },
    { word: "on account of", definition: "Because of." },
    { word: "elapse", definition: "go by" },
    { word: "catastrophe", definition: "A momentous tragic event ranging from extreme misfortune to utter overthrow or ruin." },
    { word: "exert", definition: "To put forth." },
    { word: "bore", definition: "To pierce with a turning or twisting movement of a tool." },
    { word: "discipline", definition: "The ability to control your own behaviour." },
    { word: "attend to", definition: "Deal with." },
    { word: "inhabit", definition: "Live in." },
    { word: "exception", definition: "Something or someone that is not included in a general statement or does not follow a rule or pattern." },
    { word: "be fond of", definition: "To like someone/something very much." },
    { word: "naive", definition: "Innocent, not having much experience." },
    { word: "overcome", definition: "To overpower or overwhelm." },
    { word: "occupy", definition: "To take or fill up (space, time, etc.)." },
    { word: "abash", definition: "Make ashamed or embarrassed." },
    { word: "vanity", definition: "Excessive pride in one's appearance." },
    { word: "remorse", definition: "Deep and painful regret for wrongdoing." },
    { word: "confide", definition: "To tell someone you trust about personal things." },
    { word: "reproach", definition: "Criticism, blame, or disapproval." },
    { word: "authority", definition: "The power you have because of your official position." },
    { word: "monarch", definition: "A king or queen." },
    { word: "tolerate", definition: "To put up with." },
    { word: "revolution", definition: "A time when people change a ruler or political system." },
    { word: "conceited", definition: "Having or showing an excessively high opinion of oneself." },
    { word: "modest", definition: "Humble." },
    { word: "monotony", definition: "The quality of being always the same, which makes something boring." },
    { word: "odd", definition: "Different from what is normal or expected." },
    { word: "drunkard", definition: "One who is habitually drunk." },
    { word: "reign", definition: "To rule a nation or group of nations as their king, queen, or emperor." },
    { word: "absurd", definition: "Ridiculous, completely stupid or unreasonable." },
    { word: "extinguish", definition: "Put out, to make a fire or light stop burning." },
    { word: "tragedy", definition: "Calamity, a disastrous event." },
    { word: "despise", definition: "To dislike and have a low opinion of someone or something." },
    { word: "voluminous", definition: "Very long and contain a lot of detail." },
    { word: "profession", definition: "A job that needs a high level of education and training." },
    { word: "ephemeral", definition: "Short-lived." },
    { word: "veritable", definition: "A word used to emphasize a description." },
    { word: "humanity", definition: "All human beings collectively." },
    { word: "resume", definition: "Continue, to take up or go on with again after interruption." },
    { word: "homesick", definition: "Sad or depressed from a longing for home." },
    { word: "inhospitable", definition: "Barren, not offering shelter." },
    { word: "humiliate", definition: "To cause (a person) a painful loss of pride." },
    { word: "tame", definition: "Domesticated, changed from the wild state." },
    { word: "agitated", definition: "Disturbed, excited." },
    { word: "rite", definition: "A ceremony that is always performed in the same way." },
    { word: "essential", definition: "Indispensable, absolutely necessary." },
    { word: "lavish", definition: "To expend or give in great amounts." },
    { word: "ruin", definition: "A destroyed or decayed building." },
    { word: "irreparable", definition: "Incapable of being rectified." },
    { word: "bear", definition: "To hold or remain firm under (a load)." },
    { word: "vicious", definition: "Spiteful, malicious." },
    { word: "reassure", definition: "To restore to assurance or confidence." },
    { word: "fasten", definition: "To attach firmly or securely in place." },
    { word: "absent-minded", definition: "Forgetful." }
];

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
