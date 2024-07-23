// Definindo as perguntas
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
    // Adicione mais perguntas conforme necessário
];

let currentQuestion = 0;
let score = 0;

// Carrega a próxima questão
function loadQuestion() {
    const questionData = questions[currentQuestion];
    
    // Define o texto da questão
    document.getElementById("question").textContent = questionData.question;
    
    // Define as opções
    for (let i = 0; i < questionData.options.length; i++) {
        const optionElement = document.getElementById("option" + (i + 1));
        optionElement.nextElementSibling.textContent = questionData.options[i];
        optionElement.checked = false; // Desmarcar as opções
    }
}

// Verifica a resposta
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        const selectedIndex = parseInt(selectedOption.id.replace("option", "")) - 1;
        
        if (selectedIndex === questions[currentQuestion].correct) {
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
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    if (score === questions.length) {
        document.getElementById("result").textContent = "Parabéns! Você acertou todas as questões!";
    } else {
        document.getElementById("result").textContent = "Você acertou " + score + " de " + questions.length + " questões.";
    }

    document.getElementById("final-score").textContent = "Pontuação Final: " + score;
}

// Reinicia o quiz
function playAgain() {
    score = 0;
    currentQuestion = 0;

    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    loadQuestion();
}

// Inicializa o quiz
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    document.getElementById("next-question").addEventListener("click", checkAnswer);
    document.getElementById("play-again").addEventListener("click", playAgain);
});


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

// Exemplo básico para manipulação do quiz
$(document).ready(function() {
    let score = 0;
    $('#next-question').click(function() {
        // Lógica para passar para a próxima pergunta
        // Atualizar a pontuação, exibir perguntas, etc.
    });

    $('#play-again').click(function() {
        // Lógica para reiniciar o quiz
        $('#result-container').hide();
        $('#quiz-container').show();
    });
});

// Incluir a biblioteca ScrollMagic
const controller = new ScrollMagic.Controller();

// Definir o efeito parallax
new ScrollMagic.Scene({
    triggerElement: ".parallax", 
    duration: "100%" // Ajuste a duração conforme necessário
})
.setPin(".parallax")
.addTo(controller);