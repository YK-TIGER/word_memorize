let currentIndex = 0;
let mode = 0; // 0: Focus on definition first, 1: Focus on word first


//Paste words that you get in python here!
const words = [
  { word: "encourage", definition: "장려하다, 촉진하다" },
  { word: "observe", definition: "관찰하다, (규칙 등을) 준수하다" },
  { word: "perceptual", definition: "지각의, 지각이 있는" },
  { word: "insight", definition: "통찰(력), 이해" },
  { word: "exceed", definition: "초과하다, 넘다" },
  { word: "neglect", definition: "간과하다, 무시하다" },
  { word: "devote", definition: "헌신하다, 전념하다" },
  { word: "arrest", definition: "체포하다, 저지하다" },
  { word: "inferior", definition: "하위의, 열등한" },
  { word: "accumulate", definition: "축적하다, 모으다" },
  { word: "squeeze", definition: "(즙을) 짜다, 짜내다, 우겨넣다, 한데 몰아 놓다" },
  { word: "particle", definition: "입자, 극소량" },
  { word: "disrupt", definition: "방해하다, 붕괴시키다" },
  { word: "integrate", definition: "통합하다, 융합하다" },
  { word: "martial", definition: "무술의, 싸움의" },
  { word: "refine", definition: "정제하다, 불순물을 제거하다" },
  { word: "currency", definition: "통화, 통용" },
  { word: "parallel", definition: "평행의, 평행을 이루는" },
  { word: "intrigue", definition: "흥미를 끌다, 호기심을 돋우다; 흥미진진함, 음모" },
  { word: "stationary", definition: "고정식의, 움직이지 않는" },
  { word: "famine", definition: "기근, 굶주림" },
  { word: "counterpart", definition: "상대, 대응 관계에 있는 것" },
  { word: "decent", definition: "제대로 된, 적당한, 훌륭한, 존경할 만한" },
  { word: "intact", definition: "손상되지 않은, 온전한" },
  { word: "emulate", definition: "모방하다, 흉내 내다" },
  { word: "divert", definition: "전환하다, 우회시키다" },
  { word: "lateral", definition: "측면의, 옆의" },
  { word: "transcribe", definition: "옮겨 적다, 필기하다" },
  { word: "prosecute", definition: "기소하다, 고발하다" },
  { word: "stubborn", definition: "완고한, 완강한" },
  { word: "outdated", definition: "구식의, 시대에 뒤진" },
  { word: "eradicate", definition: "근절하다, 박멸하다" },
  { word: "adorn", definition: "꾸미다, 장식하다" },
  { word: "amend", definition: "수정하다, 고치다" },
  { word: "deficiency", definition: "결핍, 부족" },
  { word: "appreciate", definition: "감사하다, 인식하다, 이해하다, 감상하다, 음미하다" },
  { word: "associate", definition: "관련시키다, 연상하다; 동료" },
  { word: "symptom", definition: "증상, 조짐, 징후" },
  { word: "resident", definition: "주민, 거주자" },
  { word: "previous", definition: "이전의, (시간 상) 앞의" },
  { word: "destination", definition: "목적지, 도착지" },
  { word: "reproduce", definition: "모사하다, 복제하다, 번식하다" },
  { word: "restrict", definition: "제한하다, 통제하다" },
  { word: "dependence", definition: "의존(성), 의지" },
  { word: "patent", definition: "특허(권), 특허품" },
  { word: "acknowledge", definition: "인정하다" },
  { word: "sweep", definition: "쓸다" },
  { word: "dimension", definition: "크기, 규모, 차원" },
  { word: "intensive", definition: "집중의, 치열한" },
  { word: "tribe", definition: "부족, 집단" },
  { word: "conform", definition: "순응하다, 따르다" },
  { word: "subsequent", definition: "그 다음의, 그 후의" },
  { word: "obligation", definition: "의무, 책임" },
  { word: "congestion", definition: "혼잡, 밀집" },
  { word: "fraction", definition: "부분, 일부, 분수" },
  { word: "medieval", definition: "중세의, 고풍의" },
  { word: "tease", definition: "놀리다, 장난하다" },
  { word: "cling", definition: "달라붙다, 꼭 붙잡다" },
  { word: "reclaim", definition: "되찾다, 개선하다" },
  { word: "rally", definition: "집회" },
  { word: "stagger", definition: "비틀거리다, 휘청거리다, 시차를 두다" },
  { word: "cynical", definition: "냉소적인, 부정적인" },
  { word: "intermission", definition: "(공연 중간의) 휴식 시간" },
  { word: "outrun", definition: "넘어서다, 웃돌다" },
  { word: "aggravate", definition: "악화시키다, 심화시키다" },
  { word: "proclaim", definition: "선포하다, 선언하다" },
  { word: "sober", definition: "맑은 정신의, 냉철한" },
  { word: "custody", definition: "관리, 양육권, 구금" },
  { word: "counterproductive", definition: "역효과를 낳는" },
  { word: "outrage", definition: "격분시키다" },
  { word: "project", definition: "(연구) 과제, 사업; 예상하다, 계획하다, 투영하다, 비추다" },
  { word: "supply", definition: "공급하다, 주다; 공급(품)" },
  { word: "equipment", definition: "장비, 설비" },
  { word: "continuous", definition: "지속적인, 계속되는" },
  { word: "contrary", definition: "반대로, 반하여; 반대의" },
  { word: "absorb", definition: "흡수하다, 빨아들이다, 열중시키다, (주의를) 빼앗다" },
  { word: "myth", definition: "신화, 미신" },
  { word: "curriculum", definition: "교과 과정, 교육 과정" },
  { word: "symbolize", definition: "상징하다" },
  { word: "derive", definition: "이끌어내다, 얻다" },
  { word: "storage", definition: "보관, 저장(소)" },
  { word: "transmit", definition: "전송하다, 발송하다" },
  { word: "radical", definition: "근본적인, 기초적인, 급진적인" },
  { word: "nerve", definition: "신경, 불안" },
  { word: "defect", definition: "결함, 부족" },
  { word: "utilize", definition: "이용하다, 활용하다" },
  { word: "flock", definition: "떼, 무리; 몰리다, 떼를 지어 오다" },
  { word: "factual", definition: "사실에 입각한, 실제의" },
  { word: "flattery", definition: "아첨, 아부" },
  { word: "disgust", definition: "혐오감을 유발하다" },
  { word: "orient", definition: "~ 중심의, ~을 지향하는" },
  { word: "horizontal", definition: "수평의, 가로의" },
  { word: "recite", definition: "암송하다, 낭독하다" },
  { word: "ecology", definition: "생태학, 생태" },
  { word: "indulge", definition: "~을 마음껏 하다, ~에 빠지다" },
  { word: "orbit", definition: "궤도; ~의 주위를 궤도를 그리며 돌다" },
  { word: "affluent", definition: "풍부한, 풍족한, 부유한" },
  { word: "optical", definition: "시각적인, 눈의" },
  { word: "gross", definition: "총체의, 모두 합친" },
  { word: "drastic", definition: "과감한, 급격한" },
  { word: "bulk", definition: "대량, 큰 규모" },
  { word: "embryo", definition: "배아, 태아" },
  { word: "complement", definition: "보완물, 보충물; 보완하다, 보충하다" },
  { word: "premature", definition: "조기의, 조숙한" },
  { word: "overthrow", definition: "타도하다, 전복하다" },
  { word: "exercise", definition: "운동; (권력 등을) 행사하다" },
  { word: "traditionally", definition: "전통적으로" },
  { word: "interpret", definition: "해석하다, 이해하다" },
  { word: "surface", definition: "표면, 수면" },
  { word: "outward", definition: "겉으로 보이는, 표면상의" },
  { word: "literature", definition: "문학, 문헌" },
  { word: "convince", definition: "설득하다, 납득시키다" },
  { word: "considerable", definition: "상당한, 중요한" },
  { word: "prohibit", definition: "금지하다, 막다" },
  { word: "entertainment", definition: "오락, 여흥" },
  { word: "appliance", definition: "가전제품, 기구" },
  { word: "retail", definition: "소매, 소매상" },
  { word: "alert", definition: "경계하는, 기민한; 경계 경보" },
  { word: "assess", definition: "평가하다, 산정하다" },
  { word: "linguistic", definition: "어학의, 언어의" },
  { word: "primary", definition: "주요한, 근본적인" },
  { word: "plea", definition: "호소, 애원, 탄원" },
  { word: "embody", definition: "구체적으로 나타내다, 포함하다, 수록하다" },
  { word: "improvise", definition: "즉흥적으로 (연주)하다" },
  { word: "correspond", definition: "일치하다, 해당하다" },
  { word: "equilibrium", definition: "평정, 평형" },
  { word: "underestimate", definition: "너무 적게 잡다, 과소평가하다" },
  { word: "accustomed", definition: "익숙해진, 익숙한" },
  { word: "illuminate", definition: "밝히다, 명확하게 하다" },
  { word: "brutality", definition: "잔혹성, 잔혹 행위" },
  { word: "exotic", definition: "외래의, 색다른" },
  { word: "longevity", definition: "장수, 오래 지속됨" },
  { word: "momentum", definition: "기세, 추진력" },
  { word: "discrete", definition: "별개의, 분리된" },
  { word: "undo", definition: "원상태로 돌리다, 취소하다, 풀다, 열다" },
  { word: "slaughter", definition: "도살하다, 학살하다" },
  { word: "dismay", definition: "낙담, 실망; 크게 실망시키다" },
  { word: "righteous", definition: "(도덕적으로) 올바른, 당연한" },
  { word: "lethal", definition: "치명적인" },
  { word: "susceptible", definition: "쉽게 걸리는, 영향 받기 쉬운" },
  { word: "frequently", definition: "자주, 흔히" },
  { word: "attitude", definition: "태도, 자세" },
  { word: "reject", definition: "거부하다, 거절하다" },
  { word: "reveal", definition: "드러내다, 밝히다" },
  { word: "pursue", definition: "추구하다, 밀고 나가다, 뒤쫓다, 추적하다" },
  { word: "employ", definition: "고용하다, 채용하다, 사용하다, 쓰다" },
  { word: "relief", definition: "안도, 안심" },
  { word: "subtle", definition: "미묘한, 감지하기 힘든" },
  { word: "geography", definition: "지형, 지리(학)" },
  { word: "swell", definition: "(손발 등이) 붓다, 팽창하다" },
  { word: "hesitate", definition: "주저하다, 망설이다" },
  { word: "ruin", definition: "망치다, 못쓰게 만들다; 폐허, 파멸" },
  { word: "drift", definition: "이동, 추이; 떠내려가다, 방랑하다" },
  { word: "uncover", definition: "발견하다, 폭로하다" },
  { word: "prospect", definition: "전망, 가능성" },
  { word: "mobility", definition: "이동성, 유동성" },
  { word: "wholesaler", definition: "도매업자" },
  { word: "acquaintance", definition: "아는 사람, 지인" },
  { word: "rage", definition: "분노, 격노" },
  { word: "assert", definition: "(강하게) 주장하다" },
  { word: "coexist", definition: "공존하다" },
  { word: "differentiate", definition: "구분 짓다, 구별하다" },
  { word: "cargo", definition: "화물, 짐" },
  { word: "curse", definition: "욕, 저주; 저주를 내리다, 욕하다" },
  { word: "parliament", definition: "국회, 의회" },
  { word: "lament", definition: "슬퍼하다, 비탄하다" },
  { word: "imprison", definition: "가두다, 감금하다" },
  { word: "infuse", definition: "스며들게 하다, 주입하다" },
  { word: "brag", definition: "자랑하다, 떠벌리다" },
  { word: "inflict", definition: "(피해 등을) 가하다, 괴롭히다" },
  { word: "meticulous", definition: "꼼꼼한, 세심한" },
  { word: "embark", definition: "시작하다, 나서다" },
  { word: "tangle", definition: "엉키게 하다, 얽히게 하다" },
  { word: "county", definition: "자치주, 자치군" },
  { word: "patrol", definition: "순찰하다, 순회하다" }
];
//












//Do NOT touch any code below here!





function toggleDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
window.addEventListener('DOMContentLoaded', () => {
  // check browser support
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // add class in body
  if (prefersDark) {
    document.body.classList.add('dark-mode');
    // change toggle check box to enable status
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) toggle.checked = true;
  }
});


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

