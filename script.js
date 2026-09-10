const questions = [
    {
        stage: "Etapa 1: O Primeiro Passo",
        question: "Em 9 de janeiro de 1822, Dom Pedro decidiu permanecer no Brasil contrariando as ordens de Portugal. Como esse dia ficou conhecido?",
        options: [
            "Dia do Fico",
            "Dia da Pátria",
            "Dia da Bandeira",
            "Dia da Abolição"
        ],
        correct: 0,
        feedback: "No Dia do Fico, D. Pedro declarou a famosa frase: 'Se é para o bem de todos e felicidade geral da Nação, diga ao povo que fico!'"
    },
    {
        stage: "Etapa 1: O Primeiro Passo",
        question: "De qual país o Brasil se tornou independente no ano de 1822?",
        options: [
            "Espanha",
            "Inglaterra",
            "Portugal",
            "França"
        ],
        correct: 2,
        feedback: "O Brasil era colônia de Portugal desde 1500 e rompeu os laços políticos definitivos em 1822."
    },
    {
        stage: "Etapa 2: O Grito Histórico",
        question: "Às margens de qual riacho D. Pedro I proclamou a Independência do Brasil em 7 de setembro de 1822?",
        options: [
            "Riacho Ipiranga",
            "Rio São Francisco",
            "Rio Amazonas",
            "Rio Paraíba do Sul"
        ],
        correct: 0,
        feedback: "O famoso 'Grito do Ipiranga' aconteceu às margens do riacho Ipiranga, na cidade de São Paulo."
    },
    {
        stage: "Etapa 2: O Grito Histórico",
        question: "Quem se tornou o primeiro Imperador do Brasil após a proclamação da Independência?",
        options: [
            "Dom João VI",
            "D. Pedro I",
            "D. Pedro II",
            "Tiradentes"
        ],
        correct: 1,
        feedback: "D. Pedro I foi coroado como o primeiro Imperador do Brasil em dezembro de 1822."
    },
    {
        stage: "Etapa 3: A Capital e os Símbolos",
        question: "Qual cidade era a capital do Brasil na época da Independência em 1822?",
        options: [
            "São Paulo",
            "Salvador",
            "Rio de Janeiro",
            "Brasília"
        ],
        correct: 2,
        feedback: "O Rio de Janeiro foi a capital do Brasil de 1763 até a inauguração de Brasília em 1960."
    },
    {
        stage: "Etapa 3: A Capital e os Símbolos",
        question: "Quais eram as duas cores principais da primeira bandeira do Brasil Imperial?",
        options: [
            "Azul e Branco",
            "Verde e Amarelo",
            "Vermelho e Preto",
            "Verde e Vermelho"
        ],
        correct: 1,
        feedback: "O verde representava a Casa de Bragança (D. Pedro I) e o amarelo a Casa de Habsburgo (Imperatriz Leopoldina)."
    },
    {
        stage: "Etapa 4: Mulheres da Independência",
        question: "Quem era a esposa de D. Pedro I que teve papel decisivo na política e assinou o decreto de Independência antes do Sete de Setembro?",
        options: [
            "Princesa Isabel",
            "Maria Leopoldina",
            "Rainha Carlota Joaquina",
            "Marquesa de Santos"
        ],
        correct: 1,
        feedback: "A Imperatriz Maria Leopoldina presidiu a reunião do Conselho de Estado e assinou a declaração oficial de independência."
    },
    {
        stage: "Etapa 4: Mulheres da Independência",
        question: "Qual heroína baiana se disfarçou de homem com o nome de 'Soldado Medeiros' para lutar no exército pela liberdade do Brasil?",
        options: [
            "Maria Quitéria",
            "Anita Garibaldi",
            "Dona Leopoldina",
            "Chiquinha Gonzaga"
        ],
        correct: 0,
        feedback: "Maria Quitéria lutou com bravura nas batalhas na Bahia e foi reconhecida como heroína por D. Pedro I."
    },
    {
        stage: "Etapa 5: As Lutas Regionais",
        question: "Em qual estado brasileiro a Independência é comemorada no dia 2 de julho devido à vitória contra as tropas portuguesas em 1823?",
        options: [
            "Pernambuco",
            "Minas Gerais",
            "Bahia",
            "Rio Grande do Sul"
        ],
        correct: 2,
        feedback: "O '2 de Julho' celebra a Independência da Bahia, quando as últimas tropas portuguesas foram expulsas de Salvador."
    },
    {
        stage: "Etapa 5: As Lutas Regionais",
        question: "Quem compôs a melodia do famoso Hino da Independência do Brasil ('Já podeis, da Pátria filhos...')?",
        options: [
            "O próprio D. Pedro I",
            "Heitor Villa-Lobos",
            "Machado de Assis",
            "Dom João VI"
        ],
        correct: 0,
        feedback: "D. Pedro I era muito talentoso para a música e compôs a melodia do Hino da Independência!"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');

const questionNumberEl = document.getElementById('question-number');
const scoreDisplayEl = document.getElementById('score-display');
const progressBarEl = document.getElementById('progress-bar');
const stageBadgeEl = document.getElementById('stage-badge');
const questionTextEl = document.getElementById('question-text');
const optionsGridEl = document.getElementById('options-grid');
const feedbackCardEl = document.getElementById('feedback-card');
const feedbackTextEl = document.getElementById('feedback-text');
const nextBtnEl = document.getElementById('next-btn');

function startGame() {
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    gameScreen.classList.add('active');
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    const q = questions[currentQuestion];

    questionNumberEl.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
    scoreDisplayEl.textContent = `Pontos: ${score}`;
    progressBarEl.style.width = `${((currentQuestion) / questions.length) * 100}%`;
    
    stageBadgeEl.textContent = q.stage;
    questionTextEl.textContent = q.question;
    
    optionsGridEl.innerHTML = '';
    feedbackCardEl.classList.remove('active');
    nextBtnEl.style.display = 'none';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        optionsGridEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const q = questions[currentQuestion];
    const buttons = optionsGridEl.querySelectorAll('.option-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === q.correct) {
        buttons[selectedIndex].classList.add('correct');
        score += 10;
        scoreDisplayEl.textContent = `Pontos: ${score}`;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[q.correct].classList.add('correct');
    }

    feedbackTextEl.textContent = q.feedback;
    feedbackCardEl.classList.add('active');
    nextBtnEl.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    gameScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const resultTitle = document.getElementById('result-title');
    const resultScore = document.getElementById('result-score');
    const resultDesc = document.getElementById('result-desc');

    resultScore.textContent = `${score} / 100 pts`;

    if (score <= 40) {
        resultTitle.textContent = "📜 Aprendiz de Historiador";
        resultDesc.textContent = "Foi um bom começo! Revise os pontos principais da Independência e tente novamente para melhorar sua pontuação!";
    } else if (score <= 80) {
        resultTitle.textContent = "⚔️ Guardião da Pátria";
        resultDesc.textContent = "Muito bem! Você conhece os principais fatos e personagens da história do Brasil!";
    } else {
        resultTitle.textContent = "👑 Herói da Independência";
        resultDesc.textContent = "Excelente! Você acertou quase tudo e demonstrou um ótimo conhecimento sobre a história do nosso país!";
    }
}

function restartGame() {
    startGame();
}