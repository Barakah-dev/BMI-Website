//HOME PAGE

//Mobile nav
const body = document.querySelector('body');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', () => {
  nav.classList.add('toggle');
  console.log('open');
})

body.addEventListener('click', (e) => {
  let clickedElement = e.target;
  console.log('close');

  if (clickedElement.classList.contains('menu-close') || !clickedElement.classList.contains('menu-open')) {
    nav.classList.remove('toggle'); 
  }
});

// Day & Night Mode
const mode = document.querySelector('.mode');
const night = document.querySelector('.night');
const day = document.querySelector('.day');
const quizContainer = document.querySelector('.quiz-container');


mode.addEventListener('click', (e) => {
  let clickedEl = e.target;
  if ((clickedEl.classList.contains('night')) || (clickedEl.classList.contains('day'))) {
    body.classList.toggle('dark-body');
    nav.classList.toggle('dark-nav');
    menu.classList.toggle('dark-menu');
    quizContainer.classList.toggle('quiz-container-dark');
    night.classList.toggle('hidden')
    day.classList.toggle('hidden')
  }

})


//Quiz body
const questions = [
  {
    question: "Which parameter is used to calculate body mass index of an individual?",
    answers:[
      {text: "Abdominal circumference", correct: false},
      {text: "Both height and weight", correct: true},
      {text: "Height", correct: false},
      {text: "Weight", correct: false}
    ],
    explanation: "Height and weight are used in calculating BMI."
  },
  {
    question: "The normal BMI for an adult is:",
    answers:[
      {text: "Less than 18.5", correct: false},
      {text: "25 to 29.9", correct: false},
      {text: "18.5 to 24.9", correct: true},
      {text: "30 to 34", correct: false}
    ],
    explanation: "The normal BMI for an adult is 18.5 to 24.9."
  },
  {
    question: "Adults with a BMI score of 30 or higher are categorised as:",
    answers:[
      {text: "Obese", correct: true},
      {text: "Healthy", correct: false},
      {text: "Underweight", correct: false},
      {text: "Overweight", correct: false}
    ],
    explanation: "A BMI score of 30 or higher in adults is categorised as obese."
  },
  {
    question: "What is the formula for calculating BMI in metric units?",
    answers:[
      {text: "BMI = 703 X (weight/height squared)", correct: false},
      {text: "BMI = weight / height", correct: false},
      {text: "None of the above", correct: false},
      {text: "BMI = weight / height squared", correct: true}
    ],
    explanation: "The formula for calculating BMI in metric units is: BMI = weight / height squared."
  },
  {
    question: "What is the formula for calculating BMI in imperial units?",
    answers:[
      {text: "BMI = 703 X (weight/height squared)", correct: true},
      {text: "BMI = weight / height", correct: false},
      {text: "None of the above", correct: false},
      {text: "BMI = weight / height squared", correct: false}
    ],
    explanation: "The formula for calculating BMI in imperial units is: BMI = 703 X (weight/height squared)."
  }
];

const questionElement = document.getElementById('question');
const questionNumElement = document.getElementById('question-num');
const answerButtons = document.getElementById('answer-btns');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const explanationsDiv = document.getElementById('explanation-div');
const explanationsElement = document.getElementById('explanations');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}


function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionNumElement.innerHTML = '<i class="fa-solid fa-circle-question"></i>' + ' ' + questionNo + "/ " + questions.length;
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');    
    button.classList.add('btn');
    button.innerHTML = answer.text;
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', clickAnswer);
  })
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  explanationsDiv.style.display = "none";
}

function showExplanation() {
  currentQuestionIndex;
  let currentQuestion = questions[currentQuestionIndex];
  explanationsElement.innerHTML = currentQuestion.explanation;
  explanationsDiv.style.display = 'block';
  console.log(explanationsElement);
}

function clickAnswer(e) {
  let clickedAnswer = e.target;

  const isCorrect = clickedAnswer.dataset.correct === 'true';
  if (isCorrect) {
    clickedAnswer.classList.add('correct');
    score++;
  } else {
    clickedAnswer.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = 'true'
  })
  nextButton.style.display = 'block';
  showExplanation();  
}

function showScore() {
  resetState();

  if (score == questions.length) {
    questionNumElement.innerHTML = '<i class="fa-solid fa-check-circle"></i>' + " " + 'Outstanding performance, champ!';
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
  } else if (score > questions.length / 2 && score < questions.length) {
    questionNumElement.innerHTML = '<i class="fa-solid fa-check-circle"></i>' + " " + 'Good job!';
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
  } else {
    questionNumElement.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>' + " " + 'You failed!';
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}.`;
  }
  nextButton.innerHTML = 'Play again';
  nextButton.style.display = "block";
  explanationsDiv.style.display = "none";
}

function nextButtonClick() {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
      showQuestion();
    } else{
      showScore();
    }
  } else {
    startQuiz();
  }
}

startQuiz();