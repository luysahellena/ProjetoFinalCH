// Dados das perguntas
const quizData = {
    geography: [
        { question: "Qual é a capital da França?", options: ["Paris", "Londres", "Berlim", "Roma"], correct: 0 },
        { question: "Qual é o maior oceano do mundo?", options: ["Atlântico", "Pacífico", "Índico", "Ártico"], correct: 1 },
        // Adicione mais perguntas de Geografia aqui
    ],
    science: [
        { question: "Qual é o elemento químico com o símbolo H?", options: ["Hélio", "Hidrogênio", "Oxigênio", "Nitrogênio"], correct: 1 },
        { question: "Qual é a força responsável pela gravidade?", options: ["Força eletromagnética", "Força nuclear", "Força gravitacional", "Força de fricção"], correct: 2 },
        // Adicione mais perguntas de Ciências aqui
    ],
    history: [
        { question: "Quem foi o primeiro presidente dos Estados Unidos?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], correct: 0 },
        { question: "Em que ano começou a Segunda Guerra Mundial?", options: ["1939", "1941", "1936", "1945"], correct: 0 },
        // Adicione mais perguntas de História aqui
    ]
};

let currentQuestion = 0;
let score = 0;
let wrongAttempts = 0;
let selectedTheme = '';

// Inicializa o formulário de cadastro
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Senhas não coincidem!");
        return;
    }

    document.getElementById("registration-section").classList.add("d-none");
    document.getElementById("theme-selection-section").classList.remove("d-none");
});

// Inicia o quiz com base no tema selecionado
function startQuiz(theme) {
    selectedTheme = theme;
    currentQuestion = 0;
    score = 0;
    wrongAttempts = 0;

    document.getElementById("theme-selection-section").classList.add("d-none");
    document.getElementById("quiz-section").classList.remove("d-none");
    loadQuestion();
}

// Carrega a pergunta atual
function loadQuestion() {
    const questionData = quizData[selectedTheme][currentQuestion];
    document.getElementById("question").textContent = questionData.question;

    questionData.options.forEach((option, index) => {
        const optionElement = document.getElementById("option" + (index + 1));
        optionElement.nextElementSibling.textContent = option;
    });
}

// Verifica a resposta selecionada
document.getElementById("next-question").addEventListener("click", function() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const selectedIndex = parseInt(selectedOption.id.replace("option", "")) - 1;
        const correctIndex = quizData[selectedTheme][currentQuestion].correct;

        if (selectedIndex === correctIndex) {
            score++;
            document.getElementById("score").textContent = "Pontuação: " + score;
        } else {
            wrongAttempts++;
            if (wrongAttempts >= 5) {
                alert("Você errou 5 vezes! O quiz será reiniciado.");
                startQuiz(selectedTheme); // Reinicia o quiz no mesmo tema
                return;
            }
        }

        currentQuestion++;
        if (currentQuestion < quizData[selectedTheme].length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Por favor, selecione uma opção.");
    }
});

// Exibe o resultado final
function showResult() {
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    document.getElementById("result").textContent = score === quizData[selectedTheme].length
        ? "Parabéns! Você acertou todas as questões!"
        : `Você acertou ${score} de ${quizData[selectedTheme].length} questões.`;
        
    document.getElementById("final-score").textContent = "Pontuação Final: " + score;
}

// Reinicia o quiz
document.getElementById("play-again").addEventListener("click", function() {
    startQuiz(selectedTheme);
});
