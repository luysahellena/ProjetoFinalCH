let questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correct: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        correct: 2
    },
    {
        question: "Who is the author of the book 'To Kill a Mockingbird'?",
        options: ["F. Scott Fitzgerald", "Harper Lee", "Jane Austen", "J.K. Rowling"],
        correct: 1
    },
    //Adicionar mais perguntas
];

let currentQuestion = 0;
let score = 0;

// Carrega a próxima questão
function loadQuestion() {
    // Obtem a questão atual
    const questionData = questions[currentQuestion];

    // Define o texto da questão
    document.getElementById("question").textContent = questionData.question;

    // Define as opções
    for (let i = 0; i < questionData.options.length; i++) {
        document.getElementById("option" + (i + 1)).nextElementSibling.textContent = questionData.options[i];
    }
}

// Verifica a resposta
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const selectedIndex = parseInt(selectedOption.id.replace("option", ""));
        if (selectedIndex - 1 === questions[currentQuestion].answer) {
            score++;
            document.getElementById("score").textContent = "Score: " + score;
        }
        // Avança para a próxima questão
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

// Exibe os resultados
function showResult() {
    // Esconde o contêiner do quiz e mostra o contêiner de resultados
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    // Define o texto do resultado
    if (score === questions.length) {
        document.getElementById("result").textContent = "Parabéns! Você acertou todas as questões!";
    } else {
        document.getElementById("result").textContent = "Você acertou " + score + " de " + questions.length + " questões.";
    }

    document.getElementById("final-score").textContent = "Pontuação Final: " + score;
}

// Reinicia o quiz
function playAgain() {
    // Reinicia a pontuação e a questão atual
    score = 0;
    currentQuestion = 0;

    // Esconde o contêiner de resultados e mostra o contêiner do quiz
    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    // Carrega a primeira questão
    loadQuestion();
}

// Carrega a primeira questão quando a página carregar
loadQuestion();

// Adiciona eventos de clique aos botões
document.getElementById("next-question").addEventListener("click", checkAnswer);
document.getElementById("play-again").addEventListener("click", playAgain);

$(document).ready(function() {
    displayQuestion();
    $("#next-question").click(nextQuestion);
    $("#play-again").click(playAgain);
});

