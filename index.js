let currentIndex = 0;

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
    { word: "elapse", definition: "(Time) to pass." },
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


function flipCard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.toggle('flipped');

    const wordElement = document.getElementById('word');
    const definitionElement = document.getElementById('definition');

    if (flashcard.classList.contains('flipped')) {
        definitionElement.style.display = 'none'; 
        wordElement.style.display = 'inline'; 
    } else {
        definitionElement.style.display = 'inline'; 
        wordElement.style.display = 'none'; 
    }
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
    const wordElement = document.getElementById('word');
    const definitionElement = document.getElementById('definition');

    wordElement.textContent = words[currentIndex].word;
    definitionElement.textContent = words[currentIndex].definition;

    // 의미가 무조건 보이도록 설정
    definitionElement.style.display = 'inline'; 
    wordElement.style.display = 'none'; 
    document.querySelector('.flashcard').classList.remove('flipped'); // 카드를 초기 상태로 설정
}

// 키보드 이벤트 리스너 추가
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        flipCard(); // 스페이스바를 누르면 카드 플립
        event.preventDefault(); // 기본 스페이스바 동작 방지
    }
    if (event.code === 'ArrowLeft') {
        previousCard();
    }
    if (event.code === 'ArrowRight') {
        nextCard();
    }
});

// 페이지 로드 시 첫 번째 카드 업데이트
updateCard();
