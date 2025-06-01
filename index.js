let currentIndex = 0;
let mode = 0; // 0: Focus on definition first, 1: Focus on word first
//import words from './words.js'
const words = [
    { word: "object", definition: "물체, 대상, 목표; 반대하다, 이의를 제기하다" },
    { word: "advance", definition: "나아가다, 진보하다; 진보, 향상" },
    { word: "intense", definition: "격렬한, 강렬한" },
    { word: "ensure", definition: "보장하다, 확실하게 하다" },
    { word: "assume", definition: "추정하다, 가정하다, (책임 등을) 맡다" },
    { word: "expand", definition: "확장하다, 넓히다" },
    { word: "minimum", definition: "최저의, 최소한의" },
    { word: "composition", definition: "구조, 구성, 작곡, 작품" },
    { word: "persuade", definition: "설득하다, 납득시키다" },
    { word: "vulnerable", definition: "취약한, 연약한" },
    { word: "convert", definition: "바꾸다, 변화하다, 개조하다" },
    { word: "intuition", definition: "직관(력), 직감" },
    { word: "autograph", definition: "사인, 서명" },
    { word: "compromise", definition: "타협; 타협하다, 양보하다" },
    { word: "collaboration", definition: "합작, 협력" },
    { word: "ripen", definition: "익다, 숙성시키다" },
    { word: "transaction", definition: "거래, 매매" },
    { word: "utilitarian", definition: "실용적인, 실리적인" },
    { word: "enlarge", definition: "확대하다, 확장하다" },
    { word: "circulate", definition: "순환하다" },
    { word: "fallacy", definition: "틀린 생각, 오류" },
    { word: "weary", definition: "지친, 피곤한" },
    { word: "console", definition: "위로하다, 위안을 주다; 제어 장치" },
    { word: "extinguish", definition: "(불을) 끄다, 끝내다" },
    { word: "replicate", definition: "복제하다, 모사하다" },
    { word: "epic", definition: "서사시" },
    { word: "encompass", definition: "포함하다, 망라하다" },
    { word: "unprecedented", definition: "전례 없는, 새로운" },
    { word: "compatible", definition: "양립할 수 있는, 호환이 되는" },
    { word: "sermon", definition: "설교" },
    { word: "sewage", definition: "(하수도의) 오수, 하수" },
    { word: "oppressive", definition: "억압적인, 억압하는" },
    { word: "traitor", definition: "반역자, 배신자" },
    { word: "ethical", definition: "윤리적인, 도덕적으로 옳은" },
    { word: "delusion", definition: "착각, 망상" },
    { word: "support", definition: "도움을 주다, 지지하다; 지지, 도움" },
    { word: "predict", definition: "예측하다, 예견하다" },
    { word: "organism", definition: "생물, 유기체" },
    { word: "describe", definition: "묘사하다, 서술하다" },
    { word: "inactive", definition: "활동적이지 않은, 소극적인" },
    { word: "spirit", definition: "정신, 영혼" },
    { word: "narrative", definition: "이야기, 묘사; 서술적인, 이야기로 된" },
    { word: "admit", definition: "인정하다, 승인하다, (입장 · 입학 등을) 허가하다" },
    { word: "distract", definition: "집중이 안 되게 하다" },
    { word: "unexpectedly", definition: "예기치 않게, 예상 밖으로" },
    { word: "secure", definition: "안전한; 안전을 보장하다, 보호하다, 고정시키다" },
    { word: "propose", definition: "제안하다, 제의하다" },
    { word: "substantial", definition: "상당한, 많은" },
    { word: "inhabit", definition: "~에 살다, 거주하다" },
    { word: "prosper", definition: "번창하다, 번성하다" },
    { word: "wilderness", definition: "황야, 황무지" },
    { word: "inquire", definition: "묻다, 알아보다" },
    { word: "combustion", definition: "연소, 불이 탐" },
    { word: "receptive", definition: "수용적인, 선뜻 받아들이는" },
    { word: "renowned", definition: "유명한, 명성 있는" },
    { word: "deprive", definition: "빼앗다, 박탈하다" },
    { word: "decisive", definition: "결단력 있는, 결정적인" },
    { word: "breathtaking", definition: "멋진, 굉장한" },
    { word: "commerce", definition: "상업, 무역" },
    { word: "precipitation", definition: "강수량, 강수" },
    { word: "rcatastrophe", definition: "재앙, 참사" },
    { word: "rationale", definition: "근거, 이유" },
    { word: "expire", definition: "만료되다, 끝나다" },
    { word: "impede", definition: "방해하다, 지연시키다" },
    { word: "skeleton", definition: "골격, 뼈대, 해골" },
    { word: "pledge", definition: "약속, 맹세, 서약; 약속하다, 맹세하다" },
    { word: "duplicate", definition: "되풀이하다, 복제하다" },
    { word: "repress", definition: "억제하다, (감정을) 참다" },
    { word: "frost", definition: "서리, 성애" },
    { word: "benevolent", definition: "자비로운" },
    { word: "ignore", definition: "무시하다, 못 본 척하다" },
    { word: "certainty", definition: "확신, 확실성" },
    { word: "perceive", definition: "인식하다, 인지하다" },
    { word: "address", definition: "주소; 해결하다, 처리하다, 말을 걸다, ~에 주소를 적다" },
    { word: "fortunately", definition: "다행히, 운 좋게" },
    { word: "accompany", definition: "동반하다, 동행하다" },
    { word: "imitate", definition: "흉내 내다, 모방하다" },
    { word: "precise", definition: "정확한, 정밀한" },
    { word: "apparently", definition: "분명히, 겉보기에" },
    { word: "foresee", definition: "예견하다, 예상하다" },
    { word: "pretend", definition: "~인 척하다, 가장하다" },
    { word: "voluntary", definition: "자발적인, 자원봉사의" },
    { word: "allocate", definition: "할당하다, 배분하다" },
    { word: "plot", definition: "줄거리, 구상" },
    { word: "enroll", definition: "등록하다, 입학시키다" },
    { word: "equivalent", definition: "상응하는, 동등한" },
    { word: "violate", definition: "위반하다, 침해하다" },
    { word: "collapse", definition: "무너지다, 붕괴하다" },
    { word: "impose", definition: "(의무 · 세금 등을) 부과하다, 강요하다" },
    { word: "quest", definition: "탐구, 추구" },
    { word: "deforestation", definition: "삼림 벌채" },
    { word: "rhyme", definition: "운이 맞다, 각운을 이루다" },
    { word: "contradict", definition: "모순되다, 반박하다" },
    { word: "ambivalent", definition: "모순된 감정을 가진, 양면적인" },
    { word: "awkward", definition: "어색한, 불편한" },
    { word: "surmount", definition: "(곤란 · 장애를) 극복하다" },
    { word: "epidemic", definition: "(병의) 만연, 유행" },
    { word: "implication", definition: "함축적 의미, 암시" },
    { word: "excavate", definition: "발굴하다, 파내다" },
    { word: "withstand", definition: "견뎌내다, 버티다" },
    { word: "afflict", definition: "고통을 주다, 학대하다" },
    { word: "throne", definition: "왕좌, 왕위" },
    { word: "ornament", definition: "장식, 꾸밈; 장식하다" },
    { word: "ingest", definition: "섭취하다, 삼키다" },
    { word: "prolong", definition: "연장시키다, 연기하다" },
    { word: "improve", definition: "향상시키다, 개선되다" },
    { word: "instantly", definition: "즉시, 즉각" },
    { word: "instrument", definition: "악기, 기구, 도구" },
    { word: "phenomenon", definition: "현상, 사건" },
    { word: "evaluate", definition: "평가하다, 감정하다" },
    { word: "accomplish", definition: "완수하다, 성취하다" },
    { word: "crucial", definition: "결정적인, 중요한" },
    { word: "respondent", definition: "응답자" },
    { word: "attribute", definition: "~의 탓(덕)으로 돌리다; 특성, 속성" },
    { word: "prejudice", definition: "편견, 선입관" },
    { word: "excess", definition: "과잉, 초과, 여분; 여분의, 초과한" },
    { word: "transform", definition: "변화시키다, 완전히 바꿔 놓다" },
    { word: "scarce", definition: "부족한, 드문" },
    { word: "admire", definition: "존경하다, 감탄하다, 칭찬하다" },
    { word: "paw", definition: "(동물의) 발" },
    { word: "assemble", definition: "모으다, 모이다, 조립하다" },
    { word: "suppress", definition: "참다, 억압하다" },
    { word: "interval", definition: "간격, 사이" },
    { word: "entrepreneur", definition: "기업가, 사업가" },
    { word: "lyric", definition: "가사, 서정시" },
    { word: "fluctuate", definition: "변동하다, 오르내리다" },
    { word: "germ", definition: "세균, 미생물" },
    { word: "aggregate", definition: "총체적인, 합계의" },
    { word: "seize", definition: "잡다, 장악하다" },
    { word: "impair", definition: "손상시키다, 악화시키다" },
    { word: "legacy", definition: "유산, 재산" },
    { word: "contempt", definition: "멸시, 경멸" },
    { word: "elusive", definition: "찾아보기 힘든, 규정하기 힘든" },
    { word: "bribe", definition: "뇌물; 매수하다, 뇌물을 주다" },
    { word: "conceit", definition: "자만심, 생각" },
    { word: "deference", definition: "복종, 경의" },
    { word: "exemplify", definition: "좋은 본보기가 되다, 예를 들다" },
    { word: "rash", definition: "발진, 뾰루지" },
    { word: "scorn", definition: "비웃다, 경멸하다" },
    { word: "redundant", definition: "불필요한, 쓸모없는" },
    { word: "reduce", definition: "줄이다, 감소시키다" },
    { word: "imagery", definition: "이미지, 형상화, 형상" },
    { word: "spoil", definition: "상하게 하다, 망치다, 버릇없게 만들다" },
    { word: "assignment", definition: "과제, 임무, 배정, 배치" },
    { word: "adjust", definition: "조절하다, 조정하다, 적응하다" },
    { word: "equality", definition: "평등, 균등" },
    { word: "conventional", definition: "관습적인, 전통적인" },
    { word: "mature", definition: "다 자란, 성숙한; 성숙하다, 다 자라다" },
    { word: "abstract", definition: "추상적인" },
    { word: "fatigue", definition: "피로, 피곤" },
    { word: "criteria", definition: "기준(criterion의 복수형)" },
    { word: "paralyze", definition: "마비시키다" },
    { word: "intervention", definition: "개입, 중재" },
    { word: "retire", definition: "은퇴하다, 후퇴하다" },
    { word: "statistic", definition: "통계 (자료)" },
    { word: "weave", definition: "(실 · 천 등을) 짜다" },
    { word: "deliberate", definition: "고의적인, 의도적인; 심의하다, 심사숙고하다" },
    { word: "surgeon", definition: "외과 의사" },
    { word: "monetary", definition: "금전적인, 화폐의" },
    { word: "scatter", definition: "뿌리다, 분산시키다" },
    { word: "evaporate", definition: "증발하다, 사라지다" },
    { word: "utmost", definition: "최고의, 극도의" },
    { word: "introspective", definition: "자기 성찰적인" },
    { word: "plow", definition: "일구다, 쟁기로 갈다" },
    { word: "expel", definition: "퇴학시키다, 추방하다" },
    { word: "linear", definition: "직선 모양의" },
    { word: "submerge", definition: "(물속에) 잠기다, 잠수하다" },
    { word: "publicize", definition: "홍보하다, 공표하다" },
    { word: "comprise", definition: "구성하다" },
    { word: "appendix", definition: "부록, 부가물, 맹장" },
    { word: "verge", definition: "직전, 경계선" },
    { word: "dread", definition: "두려움, 공포, 불안; 무서워하다, 두려워하다" },
    { word: "overturn", definition: "뒤집다, 전복시키다" },
    { word: "casualty", definition: "피해자, 사상자, 희생자" },
    { word: "transient", definition: "일시적인, 순간적인" }
];


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

