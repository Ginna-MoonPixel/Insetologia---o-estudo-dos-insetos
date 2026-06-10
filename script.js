const insetos = [
    { nome: "Joaninha", emoji: "🐞", desc: "As joaninhas são predadoras vorazes de pulgões. Uma única joaninha pode comer mais de 5.000 pulgões na vida!", img: "https://picsum.photos/id/1015/600/400" },
    { nome: "Libélula", emoji: "🦋", desc: "As libélulas são os caçadores mais ágeis do reino animal. Elas conseguem voar para trás e para os lados!", img: "https://picsum.photos/id/201/600/400" },
    { nome: "Formiga", emoji: "🐜", desc: "As formigas conseguem carregar até 50 vezes o seu próprio peso. Elas também cultivam fungos em fazendas subterrâneas!", img: "https://picsum.photos/id/251/600/400" },
    { nome: "Gafanhoto", emoji: "🦗", desc: "Eles ouvem com as pernas! Seus órgãos auditivos ficam nas tibias das patas traseiras.", img: "https://picsum.photos/id/870/600/400" }
];

const quizQuestions = [
    { question: "Qual inseto consegue voar para trás?", options: ["Joaninha", "Libélula", "Formiga", "Abelha"], answer: "Libélula" },
    { question: "Onde as borboletas provam o gosto?", options: ["Boca", "Asas", "Patas", "Antenas"], answer: "Patas" },
    { question: "Quanto peso uma formiga consegue carregar?", options: ["5x", "20x", "50x", "100x"], answer: "50x" }
];

let currentQuestion = 0;
let score = 0;

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
    const q = quizQuestions[currentQuestion];
    document.getElementById('question').innerHTML = `<h3>${q.question}</h3>`;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('result').textContent = '';
}

function checkAnswer(selected) {
    const q = quizQuestions[currentQuestion];
    const result = document.getElementById('result');
    if (selected === q.answer) {
        result.innerHTML = '✅ Acertou! 🏆';
        result.style.color = '#00ffcc';
        score++;
    } else {
        result.innerHTML = `❌ Errado! A resposta era: <strong>${q.answer}</strong>`;
        result.style.color = '#ff00aa';
    }
    document.getElementById('next-btn').style.display = 'block';
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById('question').innerHTML = `<h3>Quiz Finalizado!</h3>`;
        document.getElementById('options').innerHTML = '';
        document.getElementById('result').innerHTML = `Você acertou ${score} de ${quizQuestions.length} perguntas! 🎉`;
        document.getElementById('next-btn').style.display = 'none';
    }
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.style.background = document.body.style.background.includes('#0a0a2a') 
        ? 'linear-gradient(135deg, #ffe6f0, #e6f0ff)' 
        : 'linear-gradient(135deg, #0a0a2a, #1a0033)';
    document.getElementById('theme-toggle').textContent = document.body.style.background.includes('#0a0a2a') ? '🌙 Modo Escuro' : '☀️ Modo Claro';
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onload = () => {
    populateGallery();
    loadQuestion();
};
