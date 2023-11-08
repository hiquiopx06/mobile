const questions = [
    {
    question: "Qual é a capital do Brasil?",
    choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    answer: "Brasília",
    },
    {
    question: "Qual é melhor jogo?",
    choices: ["free fire", "minecraft", "roblox", "lol"],
    answer: "minecraft",
    },
    {
    question: "Qual é mais fiel",
    choices: ["mulher", "homem" ,],
    answer: "homem",
    },
    {
        question: "Qual é o super heroi da marvel",
        choices: ["pantera negra", "batmam" ,"super choque" , "robim"],
        answer: "homem",
        },
    {
    question: "Qual é o melhor esporte",
    choices: ["basquete", "volei", "futebol", "randebol"],
    answer: "basquete",
    },
    {
    question: "Qual é o numero certo",
    choices: ["7", "13", "4", "10"],
    answer: "13",
    },
    {
    question: "Qual é a cor fria",
    choices: ["azul", "vermelho", "amarelo", "branco"],
    answer: "azul",
    },
    {
    question: "Qual é o melhor jogador de futebol",
    choices: ["Messi", "Neymar", "Vinicius jurnior", "CR7"],
    answer: "meci",
    },
    {
    question: "Qual é a melhor comida ",
    choices: ["macarão" , "arroz e feijão" , "pizza" , "batata frita"],
    answer: "pizza",
    },
    {
    question: "Qual é o animal mais perigoso ",
    choices: ["cachoro" , "leão" , "tigre" , "gato"],
    answer: "leão",
    }
    ];
    
    const questionElement = document.getElementById("question");
    const choiceElements = Array.from(document.getElementsByClassName("choice"));
    const nextButton = document.getElementById("next");
    const scoreElement = document.getElementById("score");
    const wrongElement = document.getElementById("wrong");
    
    let currentQuestion = 0;
    let score = 0;
    let wrong = 0;
    let answerChosen = false;
    
    function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
    
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].innerText = choices[i];
    }
    answerChosen = false; // reset flag when loading new question
    }
    
    function checkAnswer(e) {
    if (answerChosen) return; // prevent multiple answers
    answerChosen = true;
    
    if (e.target.innerText === questions[currentQuestion].answer) {
    score++;
    scoreElement.innerText = "Pontuação: " + score;
    alert("Correto!");
    } else {
    wrong++;
    wrongElement.innerText = "Erros: " + wrong;
    alert(
    "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
    );
    }
    }
    
    choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
    });
    
    function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Pontuação: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
    }
    
    nextButton.addEventListener("click", () => {
    if (!answerChosen) {
    alert("Por favor, escolha uma resposta antes de prosseguir.");
    return;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
    loadQuestion();
    } else {
    alert(
    "Fim do Quiz! Você acertou " +
    score +
    " de " +
    questions.length +
    " perguntas."
    );
    restartQuiz();
    }
    });
    
    function shuffleArray(array) {
    let currentIndex = array.length,
    temporaryValue,
    randomIndex;
    
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    
    return array;
    }
    
    loadQuestion();