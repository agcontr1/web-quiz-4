const quizElements = [
    document.getElementById("start"),
    document.getElementById("quiz"),
    document.getElementById("questions"),
    document.getElementById("timer"),
    document.getElementById("score"),
    document.getElementById("quiz-ss"),
    document.getElementById("restart"),
    document.getElementById("submit-btn"),
    document.getElementById("fscores"),
    document.getElementById("highscores"),
    document.getElementById("initials"),
    document.getElementById("p-scores")
  ];
  
  for (const quizElement of quizElements) {
    // do something with the quiz element
  }

  const choices = ["A", "B", "C", "D"];

  const choiceA = document.getElementById(choices[0]);
  const choiceB = document.getElementById(choices[1]);
  const choiceC = document.getElementById(choices[2]);
  const choiceD = document.getElementById(choices[3]);
  

  let quizTime = 60;
  let countdown;
  let scoreCount = 0;
  let endGameScore = 0;

const question1 = {
  question: "JavaScript is an _______ language?",
  choiceA: "A. Object-Oriented",
  choiceB: "B. Object-Based",
  choiceC: "C. Procedural",
  choiceD: "D. None of the above",
  correct: "A"
};

const question2 = {
  question: "Which of the following keywords is used to define a variable in JavaScript?",
  choiceA: "A. Var",
  choiceB: "B. let",
  choiceC: "C. Both A and B",
  choiceD: "D. None of the above",
  correct: "C"
};

const question3 = {
  question: "Which of the following methods is used to access HTML elements using JavaScript?",
  choiceA: "A. getElementById()",
  choiceB: "B. getElementsByClassName()",
  choiceC: "C. Both A and B",
  choiceD: "D. None of the above",
  correct: "C"
};

const question4 = {
  question: "Upon encountering empty statements, what does the JavaScript interpreter do?",
  choiceA: "A. Throws an error",
  choiceB: "B. Ignores the statement",
  choiceC: "C. Gives a warning",
  choiceD: "D. None of the above",
  correct: "B"
};

const questions = [question1, question2, question3, question4];
const lastQuestionIndex = questions.length - 1;
let currentQuestionIndex = 0;

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  
  choiceA.innerHTML = currentQuestion.choiceA;
  choiceB.innerHTML = currentQuestion.choiceB;
  choiceC.innerHTML = currentQuestion.choiceC;
  choiceD.innerHTML = currentQuestion.choiceD;
}
function timePenalty() {
    quizTime -= 5;
  }
  
  function addScore() {
    scoreCount += 10 * quizTime;
    scoreContainer.innerHTML = scoreCount;
  }
  
  function renderTimer() {
    timerContainer.innerHTML = quizTime >= 0 ? quizTime-- : endQuiz();
  }
  
  function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    answer === currentQuestion.correct ? answerIsCorrect() : answerIsWrong();
    
    if (currentQuestionIndex < lastQuestionIndex) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      endQuiz();
    }
  }
  
function startQuiz() {     
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
   
}

function answerIsCorrect() {
  addScore();
}

function answerIsWrong() {
  timePenalty();
}



start.addEventListener("click", startQuiz);  

