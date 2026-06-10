// === DADOS DOS INSETOS (24 insetos) ===
const insetos = [
    { nome: "Joaninha", emoji: "🐞", desc: "As joaninhas são predadoras vorazes de pulgões. Uma única pode comer mais de 5.000 pulgões na vida!", img: "https://picsum.photos/id/1015/600/400" },
    { nome: "Libélula", emoji: "🦋", desc: "As libélulas são os caçadores mais ágeis do ar. Conseguem voar para trás, para os lados e parar no ar!", img: "https://picsum.photos/id/201/600/400" },
    { nome: "Formiga", emoji: "🐜", desc: "Podem carregar até 50 vezes o próprio peso. Vivem em sociedades altamente organizadas.", img: "https://picsum.photos/id/251/600/400" },
    { nome: "Gafanhoto", emoji: "🦗", desc: "Ouvem com as pernas! Seus órgãos auditivos ficam nas patas traseiras.", img: "https://picsum.photos/id/870/600/400" },
    { nome: "Abelha", emoji: "🐝", desc: "Realizam a 'dança do requebrado' para indicar a localização das flores com néctar.", img: "https://picsum.photos/id/133/600/400" },
    { nome: "Borboleta Monarca", emoji: "🦋", desc: "Fazem migrações incríveis de milhares de quilômetros. Provam comida com as patas!", img: "https://picsum.photos/id/1016/600/400" },
    { nome: "Besouro Hércules", emoji: "🪲", desc: "Um dos insetos mais fortes do mundo — consegue carregar 850 vezes o seu peso.", img: "https://picsum.photos/id/180/600/400" },
    { nome: "Mantídeo Religioso", emoji: "🦗", desc: "Predador camuflado que fica imóvel esperando a presa.", img: "https://picsum.photos/id/201/600/400" },
    { nome: "Cigarra", emoji: "🪰", desc: "Os machos produzem som alto com órgãos especiais — pode chegar a 120 decibéis!", img: "https://picsum.photos/id/251/600/400" },
    { nome: "Vaga-Lume", emoji: "✨", desc: "Produzem luz fria por bioluminescência para atrair parceiros.", img: "https://picsum.photos/id/133/600/400" },
    { nome: "Aranha Saltadora", emoji: "🕷️", desc: "Têm visão excelente e saltam distâncias incríveis para caçar.", img: "https://picsum.photos/id/870/600/400" },
    { nome: "Escaravelho", emoji: "🪲", desc: "Algumas espécies rolam bolas de esterco maiores que elas mesmas.", img: "https://picsum.photos/id/1015/600/400" },
    { nome: "Louva-a-Deus", emoji: "🙏", desc: "Predador paciente com patas dianteiras em forma de gancho.", img: "https://picsum.photos/id/201/600/400" },
    { nome: "Mosca Doméstica", emoji: "🪰", desc: "Consegue voar de cabeça para baixo e pousar no teto.", img: "https://picsum.photos/id/251/600/400" },
    { nome: "Borboleta Morpho", emoji: "🦋", desc: "Asas azuis iridescentes que parecem metal.", img: "https://picsum.photos/id/133/600/400" },
    { nome: "Vespa", emoji: "🐝", desc: "Predadoras de outros insetos. Constroem ninhos de papel.", img: "https://picsum.photos/id/180/600/400" },
    { nome: "Formiga-Cortadeira", emoji: "🐜", desc: "Cultivam fungos em jardins subterrâneos usando folhas.", img: "https://picsum.photos/id/251/600/400" },
    { nome: "Besouro Bombardeiro", emoji: "🪲", desc: "Ejeta um líquido quente como defesa química.", img: "https://picsum.photos/id/180/600/400" },
    { nome: "Grilo", emoji: "🦗", desc: "Cantam esfregando as asas umas nas outras.", img: "https://picsum.photos/id/870/600/400" },
    { nome: "Barata", emoji: "🪳", desc: "Existem há mais de 300 milhões de anos.", img: "https://picsum.photos/id/201/600/400" }
];

// === QUIZ - 12 PERGUNTAS ===
let quizQuestions = [
    { question: "Qual inseto consegue voar para trás?", options: ["Joaninha", "Libélula", "Formiga", "Abelha"], answer: "Libélula" },
    { question: "Onde as borboletas provam o gosto?", options: ["Boca", "Asas", "Patas", "Antenas"], answer: "Patas" },
    { question: "Quanto peso uma formiga consegue carregar?", options: ["5x", "20x", "50x", "100x"], answer: "50x" },
    { question: "Qual inseto produz luz própria?", options: ["Cigarra", "Vaga-Lume", "Gafanhoto", "Joaninha"], answer: "Vaga-Lume" },
    { question: "Como as abelhas se comunicam?", options: ["Dança", "Som", "Cheiro", "Luz"], answer: "Dança" },
    { question: "Qual é o inseto mais forte do mundo?", options: ["Besouro Hércules", "Formiga", "Libélula", "Vespa"], answer: "Besouro Hércules" },
    { question: "Onde os gafanhotos ouvem?", options: ["Cabeça", "Asas", "Patas", "Abdômen"], answer: "Patas" },
    { question: "Qual inseto rola bolas de esterco?", options: ["Escaravelho", "Barata", "Mosca", "Grilo"], answer: "Escaravelho" },
    { question: "O que o louva-a-deus usa para caçar?", options: ["Veneno", "Patas em gancho", "Asas", "Som"], answer: "Patas em gancho" },
    { question: "Qual inseto faz migração de milhares de km?", options: ["Borboleta Monarca", "Libélula", "Formiga", "Vaga-Lume"], answer: "Borboleta Monarca" },
    { question: "Como a aranha saltadora caça?", options: ["Teia", "Salto", "Veneno", "Camuflagem"], answer: "Salto" },
    { question: "Qual inseto cultiva fungos?", options: ["Formiga-Cortadeira", "Abelha", "Cigarra", "Besouro"], answer: "Formiga-Cortadeira" }
];

let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];

// Embaralhar array
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function populateGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    insetos.forEach(inseto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<div style="font-size:4rem;margin-bottom:1rem;">${inseto.emoji}</div><h3>${inseto.nome}</h3>`;
        card.onclick = () => showModal(inseto);
        gallery.appendChild(card);
    });
}

function showModal(inseto) {
    document.getElementById('modal-title').textContent = inseto.nome;
    document.getElementById('modal-image').src = inseto.img;
    document.getElementById('modal-desc').textContent = inseto.desc;
    document.getElementById('modal').style.display = 'flex';
}

function loadQuestion() {
    const q = shuffledQuestions[currentQuestion];
    document.getElementById('question').innerHTML = `<h3>${currentQuestion + 1}. ${q.question}</h3>`;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option, btn);
        optionsDiv.appendChild(btn);
    });

    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('result').textContent = '';
}

function checkAnswer(selected, button) {
    const q = shuffledQuestions[currentQuestion];
    const result = document.getElementById('result');
    const allButtons = document.querySelectorAll('#options button');

    // Desabilitar todos os botões
    allButtons.forEach(btn => btn.disabled = true);

    if (selected === q.answer) {
        result.innerHTML = '✅ Acertou! 🏆';
        result.style.color = '#00ffcc';
        score++;
        button.style.background = '#00cc66';
    } else {
        result.innerHTML = `❌ A resposta era: <strong>${q.answer}</strong>`;
        result.style.color = '#ff00aa';
        button.style.background = '#ff3366';
    }

    document.getElementById('next-btn').style.display = 'block';
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < shuffledQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
});

function finishQuiz() {
    document.getElementById('question').innerHTML = `<h3>Quiz Finalizado! 🎉</h3>`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('result').innerHTML = `
        Você acertou <strong>${score}</strong> de ${shuffledQuestions.length} perguntas!<br>
        <small>${score >= 9 ? 'Você é um verdadeiro insetólogo! 🐛' : score >= 6 ? 'Muito bom!' : 'Continue estudando os insetos!'}</small>
    `;
    document.getElementById('next-btn').style.display = 'none';
}

// Tema
document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = document.body.style.background.includes('#0a0a2a') || !document.body.style.background;
    document.body.style.background = isDark 
        ? 'linear-gradient(135deg, #ffe6f0, #e6f0ff)' 
        : 'linear-gradient(135deg, #0a0a2a, #1a0033)';
    document.getElementById('theme-toggle').textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onload = () => {
    shuffledQuestions = shuffle([...quizQuestions]); // Embaralha a cada carregamento
    populateGallery();
    loadQuestion();
};
