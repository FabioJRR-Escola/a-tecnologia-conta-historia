const questions = [
    {
        stage: "Etapa 1: Grão-Pará (Norte)",
        question: "Você acaba de desembarcar em Belém em 1823. A notícia da Independência demorou a chegar e o Pará continua fiel a Portugal. Um militar enviado por D. Pedro I usou um blefe — dizendo que uma enorme frota imperial o cercava — para fazer a província aderir ao Brasil. Quem foi ele?",
        options: [
            "Almirante Lord Cochrane",
            "Capitão John Pascoe Grenfell",
            "Duque de Caxias",
            "Bento Gonçalves"
        ],
        correct: 1,
        feedback: "Grenfell chegou com apenas um navio, mas fingiu que havia uma esquadra inteira atrás dele. O Pará aderiu em 15 de agosto de 1823."
    },
    {
        stage: "Etapa 1: Grão-Pará (Norte)",
        question: "Para navegar pelos rios amazônicos e negociar com os habitantes locais, você precisa conhecer a riqueza da floresta. Como eram chamados os produtos nativos (cacau, guaraná, baunilha e plantas medicinais) extraídos no Grão-Pará?",
        options: [
            "Especiarias do Pacífico",
            "Ouro Verde",
            "Drogas do Sertão",
            "Riquezas da Corte"
        ],
        correct: 2,
        feedback: "As 'Drogas do Sertão' eram valiosíssimas na Europa e extraídas da Floresta Amazônica com o conhecimento dos povos indígenas."
    },
    {
        stage: "Etapa 2: Bahia (Nordeste)",
        question: "Na Bahia, a Independência não foi pacífica: houve uma guerra real contra as tropas portuguesas, que só foram expulsas em 2 de julho de 1823. Qual importante batalha (terrestre e naval) foi decisiva para a vitória dos baianos?",
        options: [
            "Batalha de Pirajá",
            "Batalha do Riachuelo",
            "Batalha de Guararapes",
            "Batalha de Curuzu"
        ],
        correct: 0,
        feedback: "A Batalha de Pirajá foi um dos marcos mais importantes e decisivos da Guerra da Independência na Bahia."
    },
    {
        stage: "Etapa 2: Bahia (Nordeste)",
        question: "Uma jovem baiana cortou os cabelos, vestiu o uniforme do cunhado e se alistou como 'Soldado Medeiros' para lutar pela libertação do Brasil. Qual era o nome dessa heroína nacional?",
        options: [
            "Anita Garibaldi",
            "Joana Angélica",
            "Maria Quitéria",
            "Maria da Penha"
        ],
        correct: 2,
        feedback: "Maria Quitéria de Jesus foi reconhecida por D. Pedro I por sua bravura e tornou-se a primeira mulher a assentar praça no Exército Brasileiro."
    },
    {
        stage: "Etapa 3: Piauí e Pernambuco",
        question: "Em março de 1823, no Piauí, vaqueiros, lavradores e sertanejos armados com foices e machados enfrentaram as tropas portuguesas bem equipadas. Como ficou conhecida essa sangrenta batalha popular?",
        options: [
            "Batalha dos Guararapes",
            "Batalha do Jenipapo",
            "Guerra dos Mascates",
            "Cabanagem"
        ],
        correct: 1,
        feedback: "A Batalha do Jenipapo, às margens do rio Jenipapo (Piauí), custou a vida de centenas de brasileiros simples que lutaram pela liberdade."
    },
    {
        stage: "Etapa 3: Piauí e Pernambuco",
        question: "Em Pernambuco e no litoral nordestino, a paisagem da Zona da Mata era dominada por grandes engenhos. Qual era o principal produto agrícola cultivado com trabalho escravizado que movia a economia daquela região?",
        options: [
            "Café",
            "Cana-de-açúcar",
            "Soja",
            "Borracha"
        ],
        correct: 1,
        feedback: "O açúcar de cana era a base da economia pernambucana e sustentava a estrutura social dos grandes latifúndios."
    },
    {
        stage: "Etapa 4: Rio de Janeiro (A Corte)",
        question: "Em 9 de janeiro de 1822, no Rio de Janeiro, D. Pedro recusou ordens de Portugal para retornar à Europa. O que ele declarou nessa data, marcada como o 'Dia do Fico'?",
        options: [
            "Independência ou Morte!",
            "Se é para o bem de todos e felicidade geral da Nação, diga ao povo que fico!",
            "A sorte está lançada!",
            "Proclamo a união de todas as províncias!"
        ],
        correct: 1,
        feedback: "O 'Dia do Fico' foi o passo crucial que acelerou a separação definitiva entre o Brasil e Portugal meses depois."
    },
    {
        stage: "Etapa 4: Rio de Janeiro (A Corte)",
        question: "Apesar de o Brasil ter conquistado a independência política em 1822, uma grave contradição social permaneceu no país até 1888. Qual instituição sustentava a economia do Império?",
        options: [
            "O trabalho escravizado de pessoas negras e indígenas",
            "O regime de servidão feudal",
            "O trabalho assalariado obrigatório",
            "O imposto de vassalagem"
        ],
        correct: 0,
        feedback: "A independência brought autonomia política para as elites, mas manteve a estrutura escravocrata cruel sobre milhões de pessoas."
    },
    {
        stage: "Etapa 5: Sul e Consolidação",
        question: "Na região Sul, o Império do Brasil mantinha o controle de uma província de língua espanhola anexada anos antes (atual Uruguai). Como se chamava essa província em 1822?",
        options: [
            "Província Cisplatina",
            "Província de São Pedro",
            "Província das Missões",
            "Província de Corrientes"
        ],
        correct: 0,
        feedback: "A Província Cisplatina fez parte do Império do Brasil de 1821 a 1828, quando se tornou o estado independente do Uruguai."
    },
    {
        stage: "Etapa 5: Sul e Consolidação",
        question: "Vários cientistas europeus viajaram pelo Brasil catalogando a fauna e flora locais. Qual arquiduquesa austríaca e esposa de D. Pedro I foi uma grande incentivadora dessas artes e ciências no país?",
        options: [
            "Princesa Isabel",
            "Marquesa de Santos",
            "Imperatriz Leopoldina",
            "Rainha Carlota Joaquina"
        ],
        correct: 2,
        feedback: "Maria Leopoldina era altamente culta e desempenhou papel fundamental na política da Independência e no incentivo às ciências no Brasil."
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
        resultDesc.textContent = "Sua viagem foi desafiadora! Algumas províncias ainda resistem à unificação. Estude mais sobre nossa história e tente novamente!";
    } else if (score <= 80) {
        resultTitle.textContent = "⚔️ Guardião do Império";
        resultDesc.textContent = "Muito bem! Você percorreu o Brasil e compreendeu os conflitos, culturas e riquezas que moldaram a nossa Independência.";
    } else {
        resultTitle.textContent = "👑 Herói da Unificação";
        resultDesc.textContent = "Excelente! Você domina com maestria a história, geografia e cultura do Brasil de 1822. O novo país foi unificado com sucesso por você!";
    }
}

function restartGame() {
    startGame();
}