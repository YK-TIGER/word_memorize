let currentIndex = 0;
let mode = 0; // 0: Focus on definition first, 1: Focus on word first


//Paste words that you get in python here!
const words = [
  { word: "term", definition: "용어, 말, 학기, 기간, 조건, 조항; 이름 짓다, 칭하다" },
  { word: "tip", definition: "(실용적인) 팁, 조언, (뾰족한) 끝" },
  { word: "potential", definition: "잠재력이 있는, 가능성 있는; 잠재력, 가능성" },
  { word: "delay", definition: "늦추다, 지체시키다; 지연, 지체" },
  { word: "ecosystem", definition: "생태계" },
  { word: "fundamental", definition: "기본적인, 근본적인" },
  { word: "cognitive", definition: "인지의, 인식의" },
  { word: "laboratory", definition: "연구실, 실험실" },
  { word: "dilemma", definition: "딜레마, 진퇴양난" },
  { word: "reinforce", definition: "강화하다, 보강하다" },
  { word: "aggressive", definition: "공격적인, 매우 적극적인" },
  { word: "fade", definition: "서서히 사라지다, 희미해지다" },
  { word: "realm", definition: "영역, 왕국" },
  { word: "inherit", definition: "물려받다, 유전하다" },
  { word: "liberate", definition: "해방시키다, 자유롭게 해주다" },
  { word: "coherent", definition: "일관성 있는" },
  { word: "timber", definition: "목재, 산림" },
  { word: "intricate", definition: "복잡한, 얽힌" },
  { word: "retrospect", definition: "회상, 추억" },
  { word: "enrich", definition: "풍요롭게 하다, (질을) 높이다" },
  { word: "affair", definition: "정세, 일, 문제" },
  { word: "disperse", definition: "흩어지게 하다, 퍼뜨리다" },
  { word: "fertile", definition: "비옥한, 기름진, 새끼를 가질 수 있는" },
  { word: "bankrupt", definition: "파산한, 지불 능력이 없는" },
  { word: "prose", definition: "산문(체)" },
  { word: "mediate", definition: "중재하다, 조정하다" },
  { word: "fad", definition: "유행, 일시적 유행" },
  { word: "glide", definition: "미끄러지다" },
  { word: "irrigate", definition: "물을 대다, 관개하다" },
  { word: "behold", definition: "보다, 바라보다" },
  { word: "runaway", definition: "달아난, 가출한; 가출자, 도망자" },
  { word: "deflect", definition: "피하다, 방향을 바꾸다" },
  { word: "preface", definition: "서문, 머리말" },
  { word: "knot", definition: "매듭" },
  { word: "veterinarian", definition: "수의사" },
  { word: "direction", definition: "방향, 방위, 지시, 지도" },
  { word: "account", definition: "계좌; 설명하다, 밝히다, 차지하다, 정하다" },
  { word: "accord", definition: "일치하다, 부합하다" },
  { word: "interaction", definition: "상호작용, 소통" },
  { word: "stock", definition: "비축하다, 보관하다; 재고, 비축물, 주식 (자본), 주" },
  { word: "norm", definition: "규범, 표준" },
  { word: "superior", definition: "우수한, 우월한" },
  { word: "reliable", definition: "신뢰할 수 있는" },
  { word: "occupy", definition: "차지하다, 점령하다" },
  { word: "artificial", definition: "인공의, 인위적인" },
  { word: "reserve", definition: "예약하다, 따로 잡아두다; 매장량, 비축(물) " },
  { word: "resolve", definition: "해결하다, 결심하다" },
  { word: "absolute", definition: "완전한, 절대적인" },
  { word: "glacier", definition: "빙하" },
  { word: "dedicate", definition: "전념하다, 바치다" },
  { word: "suburb", definition: "교외" },
  { word: "breed", definition: "번식하다, 새끼를 낳다; 품종, 유형" },
  { word: "moderate", definition: "적당한, 보통의, 중도의" },
  { word: "anatomy", definition: "해부학" },
  { word: "infer", definition: "추론하다, 뜻하다" },
  { word: "eclipse", definition: "일식, 월식" },
  { word: "foretell", definition: "예고하다, 예언하다" },
  { word: "magnificent", definition: "웅장한, 장엄한" },
  { word: "sphere", definition: "구, 구체" },
  { word: "discourse", definition: "담론, 담화" },
  { word: "durable", definition: "오래가는, 내구성이 있는" },
  { word: "loyal", definition: "충실한, 성실한" },
  { word: "nonetheless", definition: "그럼에도 불구하고" },
  { word: "dormant", definition: "성장 (활동을) 중단한, 휴면 중인" },
  { word: "lease", definition: "임대차 (계약)" },
  { word: "assimilation", definition: "동화, 흡수" },
  { word: "supreme", definition: "최고의, 극도의, 최상의" },
  { word: "aversion", definition: "혐오, 반감" },
  { word: "flee", definition: "도망치다, 피하다" },
  { word: "onset", definition: "시작, 개시, 착수" },
  { word: "perform", definition: "(임무 등을) 수행하다, 행하다, 공연하다, 연기하다" },
  { word: "reflect", definition: "반영하다, 나타내다, 반성하다, 곰곰이 생각하다" },
  { word: "extroverted", definition: "외향적인" },
  { word: "mass", definition: "다수, 대규모, 질량, 부피; 대중의, 대중을 대상으로 한" },
  { word: "primitive", definition: "원시의, 원시적인" },
  { word: "brief", definition: "간단한, 간결한" },
  { word: "arrange", definition: "정리하다, 배열하다, 준비하다, 정하다" },
  { word: "dominant", definition: "지배적인, 우세한" },
  { word: "grasp", definition: "(꽉) 쥐다, 붙잡다, 파악하다, 이해하다; 이해(력)" },
  { word: "trait", definition: "특성, 특징" },
  { word: "solitary", definition: "고독한, 혼자의, 외딴" },
  { word: "generous", definition: "관대한, 너그러운" },
  { word: "lessen", definition: "줄이다, 줄다" },
  { word: "instruct", definition: "가르치다, 지시하다, 명령하다" },
  { word: "blend", definition: "뒤섞이다, 섞다; 혼합(한 것), 혼합물" },
  { word: "classify", definition: "분류하다, 구분하다" },
  { word: "plumber", definition: "배관공" },
  { word: "peculiar", definition: "독특한, 특유의" },
  { word: "crude", definition: "가공하지 않은, 조잡한, 거친" },
  { word: "reception", definition: "피로연, 축하 연회, 평판, 반응" },
  { word: "halt", definition: "정지시키다, 그만두게 하다" },
  { word: "dine", definition: "식사하다, 정찬을 들다" },
  { word: "reassure", definition: "안심시키다" },
  { word: "maneuver", definition: "움직임, 동작; 조종하다, 교묘히 다루다" },
  { word: "nominate", definition: "지명하다, 후보에 오르다" },
  { word: "surveillance", definition: "감시, 감사" },
  { word: "patron", definition: "후원자, 단골 손님, 고객" },
  { word: "refute", definition: "반박하다, 논박하다" },
  { word: "fling", definition: "내던지다, 팽개치다" },
  { word: "radioactive", definition: "방사성의, 방사능의" },
  { word: "refrain", definition: "삼가다, 자제하다" },
  { word: "presume", definition: "추정하다, 가정하다" },
  { word: "dehydrate", definition: "수분을 제거하다, 탈수하다" },
  { word: "stride", definition: "보폭, 큰 걸음" },
  { word: "malfunction", definition: "고장, 오작동" },
  { word: "state", definition: "상태, 양상; 말하다, 진술하다" },
  { word: "consequence", definition: "결과, 영향" },
  { word: "overcome", definition: "극복하다, 이기다" },
  { word: "inspire", definition: "영감을 주다, 격려하다" },
  { word: "grain", definition: "곡물, 곡식류, 알갱이, 입자" },
  { word: "tempt", definition: "유혹하다, 꾀어내다" },
  { word: "aesthetic", definition: "심미적인, 미의" },
  { word: "subscription", definition: "(정기 간행물의)  구독" },
  { word: "vague", definition: "애매한, 막연한" },
  { word: "infrastructure", definition: "기반 시설" },
  { word: "dictate", definition: "지시하다; 지시" },
  { word: "monotonous", definition: "단조로운, 지루한" },
  { word: "simulate", definition: "모의실험하다, 흉내 내다" },
  { word: "tolerance", definition: "관용, 용인, 인내심" },
  { word: "individuality", definition: "개성, 특성" },
  { word: "clarify", definition: "명확하게 하다, 정화하다" },
  { word: "consensus", definition: "합의. 의견 일치" },
  { word: "elegance", definition: "우아함, 고상" },
  { word: "embed", definition: "박다, 끼워 넣다" },
  { word: "enclose", definition: "동봉하다, 둘러싸다, 감싸다" },
  { word: "align", definition: "일렬로 정렬시키다" },
  { word: "incompatible", definition: "양립할 수 없는, 공존할 수 없는" },
  { word: "startle", definition: "놀라게 하다" },
  { word: "temperament", definition: "기질, 격한 성미" },
  { word: "shortcoming", definition: "결점, 단점" },
  { word: "incur", definition: "발생시키다, (손해를) 입히다" },
  { word: "bold", definition: "대담한, 용감한, 선명한, 굵은" },
  { word: "mumble", definition: "중얼거리다" },
  { word: "concur", definition: "동의하다, 일치하다" },
  { word: "predominant", definition: "주요한, 주된" },
  { word: "dictator", definition: "독재자" },
  { word: "stingy", definition: "인색한, 쩨쩨한" },
  { word: "nutrition", definition: "영양 섭취, 영양" },
  { word: "terminate", definition: "종료하다, 끝내다" },
  { word: "versatile", definition: "융통성이 있는, 다재 다능한" },
  { word: "subject", definition: "주제, 과목, (실험) 대상, 소재; (~의 영향)을 받는" },
  { word: "attain", definition: "달성하다, 성취하다, 도달하다, 이르다" },
  { word: "annual", definition: "연례의, 매년의" },
  { word: "critical", definition: "비판적인, 비난하는, 대단히 중요한, 중대한" },
  { word: "rare", definition: "희귀한, 드문" },
  { word: "atmosphere", definition: "대기, 공기, 분위기, 환경" },
  { word: "verbal", definition: "언어적, 말의" },
  { word: "qualify", definition: "자격을 갖추다, 자격을 주다" },
  { word: "tendency", definition: "경향, 추세" },
  { word: "underlie", definition: "~의 밑바탕에 깔려 있다" },
  { word: "passage", definition: "통과, 통행, 구절, 악절" },
  { word: "signal", definition: "신호; 신호를 보내다" },
  { word: "irritate", definition: "짜증나게 하다, 자극하다" },
  { word: "garage", definition: "차고, 주차장" },
  { word: "substitute", definition: "대체물, 대신하는 것" },
  { word: "accelerate", definition: "가속화되다, 속도를 높이다" },
  { word: "assure", definition: "장담하다, 확신시키다" },
  { word: "physician", definition: "(내과) 의사" },
  { word: "arbitrary", definition: "제멋대로인, 임의의" },
  { word: "sprint", definition: "질주하다" },
  { word: "compassion", definition: "동정심, 연민" },
  { word: "worship", definition: "숭배하다, 존경하다" },
  { word: "explicit", definition: "명확한, 분명한" },
  { word: "vendor", definition: "노점상, 행상인" },
  { word: "connotation", definition: "함축의 의미, 언외의 의미" },
  { word: "vanish", definition: "사라지다, 없어지다" },
  { word: "milestone", definition: "turning point" },
  { word: "gradual", definition: "점진적인, 완만한" },
  { word: "advent", definition: "등장, 출현" },
  { word: "congress", definition: "의회, 국회" },
  { word: "glare", definition: "섬광, (불쾌하게) 환한 빛" },
  { word: "cumulative", definition: "누적되는" },
  { word: "illiterate", definition: "문맹의, 글을 모르는" },
  { word: "hygiene", definition: "위생, 청결" },
  { word: "polarize", definition: "대립시키다" }
];
//












//Do NOT touch any code below here!



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

