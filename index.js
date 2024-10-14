const words = [
    { word: "primeval", definition: "Of or relating to the earliest ages; 원시적인." },
    { word: "distinguish", definition: "Discern, to perceive a difference in; 구별하다." },
    { word: "isolated", definition: "Secluded, occurring alone; 고립된." },
    { word: "extraordinary", definition: "Going beyond what is usual, regular, or customary; 비범한, 기이한." },
    { word: "apparition", definition: "An unusual or unexpected sight; 환영." },
    { word: "dismantle", definition: "To take a machine apart or to come apart into separate pieces; 분해하다." },
    { word: "misfortune", definition: "Bad luck, or an unlucky event; 불운, 불행." },
    { word: "reverie", definition: "Daydreaming; 몽상." },
    { word: "proposal", definition: "An act of putting forward or stating something for consideration; 제안, 청혼." },
    { word: "attire", definition: "Clothes; 의복, 복장." },
    { word: "on account of", definition: "Because of; ~때문에, ~을 위하여." },
    { word: "elapse", definition: "(시간이) 흐르다; 지나가다." },
    { word: "catastrophe", definition: "A momentous tragic event ranging from extreme misfortune to utter overthrow or ruin; 참사, 재앙." },
    { word: "exert", definition: "To put forth; (힘, 영향력을) 가하다." },
    { word: "bore", definition: "To pierce with a turning or twisting movement of a tool; 구멍을 뚫다." },
    { word: "discipline", definition: "The ability to control your own behaviour; 규율, 훈육." },
    { word: "attend to", definition: "Deal with; ~를 돌보다." },
    { word: "inhabit", definition: "Live in; ~에 살다." },
    { word: "exception", definition: "Something or someone that is not included in a general statement or does not follow a rule or pattern; 예외." },
    { word: "be fond of", definition: "To like someone/something very much; ~을 좋아하다." },
    { word: "naive", definition: "Innocent, not having much experience; 순진한." },
    { word: "overcome", definition: "To overpower or overwhelm; 압도당하다." },
    { word: "occupy", definition: "To take or fill up (space, time, etc.); (시간, 공간을) 차지하다." },
    { word: "abash", definition: "Make ashamed or embarrassed; 무안하게 하다." },
    { word: "vanity", definition: "Excessive pride in one's appearance; 허영심." },
    { word: "remorse", definition: "Deep and painful regret for wrongdoing; 회한." },
    { word: "confide", definition: "To tell someone you trust about personal things; (비밀을) 털어놓다." },
    { word: "reproach", definition: "Criticism, blame, or disapproval; 비난." },
    { word: "authority", definition: "The power you have because of your official position; 권위." },
    { word: "monarch", definition: "A king or queen; 군주." },
    { word: "tolerate", definition: "To put up with; 참다." },
    { word: "revolution", definition: "A time when people change a ruler or political system; 혁명." },
    { word: "conceited", definition: "Having or showing an excessively high opinion of oneself; 자만하는." },
    { word: "modest", definition: "Humble; 겸손한." },
    { word: "monotony", definition: "The quality of being always the same, which makes something boring; 단조로움." },
    { word: "odd", definition: "Different from what is normal or expected; 이상한." },
    { word: "drunkard", definition: "One who is habitually drunk; 음주자, 취객." },
    { word: "reign", definition: "To rule a nation or group of nations as their king, queen, or emperor; 통치하다." },
    { word: "absurd", definition: "Ridiculous, completely stupid or unreasonable; 터무니없는." },
    { word: "extinguish", definition: "Put out, to make a fire or light stop burning; (불을) 끄다." },
    { word: "tragedy", definition: "Calamity, a disastrous event; 비극." },
    { word: "despise", definition: "To dislike and have a low opinion of someone or something; 경멸하다." },
    { word: "voluminous", definition: "Very long and contain a lot of detail; 아주 길고 상세한." },
    { word: "profession", definition: "A job that needs a high level of education and training; 전문직." },
    { word: "ephemeral", definition: "Short-lived; 명이 짧은." },
    { word: "veritable", definition: "A word used to emphasize a description; 진정한." },
    { word: "humanity", definition: "All human beings collectively; 인류." },
    { word: "resume", definition: "Continue, to take up or go on with again after interruption; 다시 시작하다." },
    { word: "homesick", definition: "Sad or depressed from a longing for home; 향수병에 잠긴." },
    { word: "inhospitable", definition: "Barren, not offering shelter; 사람이 지내기 힘든." },
    { word: "humiliate", definition: "To cause (a person) a painful loss of pride; 굴욕감을 주다." },
    { word: "tame", definition: "Domesticated, changed from the wild state; 길들이다." },
    { word: "agitated", definition: "Disturbed, excited; 동요된." },
    { word: "rite", definition: "A ceremony that is always performed in the same way; 의식." },
    { word: "essential", definition: "Indispensable, absolutely necessary; 필수의." },
    { word: "lavish", definition: "To expend or give in great amounts; 아낌없이 주다." },
    { word: "ruin", definition: "A destroyed or decayed building; 폐허." },
    { word: "irreparable", definition: "Incapable of being rectified; 회복할 수 없는." },
    { word: "bear", definition: "To hold or remain firm under (a load); 참다." },
    { word: "vicious", definition: "Spiteful, malicious; 악랄한." },
    { word: "reassure", definition: "To restore to assurance or confidence; 안심시키다." },
    { word: "fasten", definition: "To attach firmly or securely in place; 매다." },
    { word: "absent-minded", definition: "Forgetful; 딴 데 정신이 팔린." }
];

let currentIndex = 0;
let mode = 'memorization'; // 기본 모드는 암기 모드

function setMode(newMode) {
    mode = newMode;
    const quizInputContainer = document.querySelector('.quiz-input-container');
    
    if (mode === 'quiz') {
        quizInputContainer.style.display = 'flex'; // 퀴즈 입력 필드 보이기
    } else {
        quizInputContainer.style.display = 'none'; // 암기 모드에서는 숨김
    }
    updateCard();
}

function flipCard() {
    const flashcard = document.querySelector('.flashcard');
    
    if (mode === 'memorization') {
        flashcard.classList.toggle('flipped');
        const wordElement = document.getElementById('word');
        const definitionElement = document.getElementById('definition');

        if (flashcard.classList.contains('flipped')) {
            definitionElement.style.display = 'block';
            wordElement.style.display = 'none';
        } else {
            definitionElement.style.display = 'none';
            wordElement.style.display = 'inline';
        }
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
    const flashcard = document.querySelector('.flashcard');
    
    wordElement.textContent = words[currentIndex].word;
    definitionElement.textContent = words[currentIndex].definition;

    if (mode === 'quiz') {
        flashcard.classList.remove('flipped');
        definitionElement.style.display = 'inline'; // 뜻을 보여줌
        wordElement.style.display = 'none'; // 단어 숨김
    } else {
        flashcard.classList.remove('flipped'); // 암기 모드에서는 단어를 먼저 보여줌
        wordElement.style.display = 'inline'; // 단어 보임
        definitionElement.style.display = 'none'; // 뜻 숨김
    }
}

function submitAnswer() {
    const input = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = words[currentIndex].word.toLowerCase();
    
    if (input === correctAnswer) {
        alert('정답입니다!');
        document.getElementById('answer-input').value = ''; // 입력창 초기화
        nextCard();
    } else {
        alert('오답입니다. 다시 시도해보세요.');
    }
}

function skipCard() {
    document.getElementById('answer-input').value = ''; // 입력창 초기화
    nextCard();
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && mode === 'memorization') {
        flipCard(); // 암기 모드에서 스페이스바로 카드 플립
        event.preventDefault();
    }
    if (event.code === 'ArrowLeft') {
        previousCard();
    }
    if (event.code === 'ArrowRight') {
        nextCard();
    }
});

// 페이지가 로드될 때 초기 카드 설정
document.addEventListener('DOMContentLoaded', () => {
    updateCard();
});
