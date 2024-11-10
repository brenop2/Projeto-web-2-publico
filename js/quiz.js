const gameElement = document.getElementById('game');
const timerElement = document.getElementById('timer');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const explanationContainerElement = document.getElementById(
  'explanation-container',
);
const explanationElement = document.getElementById('explanation');
const soundToggleButton = document.getElementById('sound-toggle');
const progressElement = document.getElementById('progress');
const successFeedbackElement = document.getElementById('success-feedback');
const failureFeedbackElement = document.getElementById('failure-feedback');

const TIMER_IN_SECONDS = 90;
let timeLeft = TIMER_IN_SECONDS;
let timerInterval;
let isSoundOn = true;
let currentQuestionIndex = 0;
let correctAnswers = 0;

function startTimer() {
  clearInterval(timerInterval); // Ensure any previous interval is cleared
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      selectAnswer(-1);
    }
  }, 1000);
}

function resetTimer() {
  timeLeft = TIMER_IN_SECONDS;
  timerElement.textContent = timeLeft;
  startTimer();
}

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = '';
  progressElement.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
  explanationContainerElement.classList.add('hidden');
  explanationElement.textContent = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.className =
      'w-full text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors disabled:pointer-events-none';
    button.onclick = () => selectAnswer(index);
    optionsElement.appendChild(button);
  });

  resetTimer(); // Start the timer for the new question
}

function selectAnswer(index) {
  // Stop the timer as soon as an answer is selected
  clearInterval(timerInterval);

  const question = questions[currentQuestionIndex];
  const buttons = Array.from(optionsElement.getElementsByTagName('button'));

  // Disable all buttons
  buttons.forEach((button) => {
    button.disabled = true;
  });

  // Highlight correct and selected answers
  buttons[question.correctAnswer].classList.add('bg-green-600', 'text-white');
  if (index === question.correctAnswer) {
    correctAnswers++;
  } else if (index > -1) {
    buttons[index].classList.add('bg-red-600', 'text-white');
  } else {
    buttons.forEach((button) => {
      button.classList.add('bg-red-600', 'text-white');
    });
  }

  // Show explanation
  explanationElement.textContent = question.explanation;
  explanationContainerElement.classList.remove('hidden');
  explanationElement.scrollIntoView({ behavior: 'smooth' });

  // Move to the next question after a delay
  setTimeout(() => {
    goToNextQuestion();
  }, 3000);
}

function goToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showFeedback();
  }
}

function showFeedback() {
  const scorePercentage = (correctAnswers / questions.length) * 100;
  if (scorePercentage >= 70) {
    successFeedbackElement.hidden = false;
  } else {
    failureFeedbackElement.hidden = false;
  }

  gameElement.hidden = true;
  gameElement.classList.add('hidden');
}

function toggleSound() {
  isSoundOn = !isSoundOn;
  soundToggleButton.innerHTML = isSoundOn
    ? '<i class="fas fa-volume-up"></i>'
    : '<i class="fas fa-volume-mute"></i>';
}

soundToggleButton.addEventListener('click', toggleSound);

successFeedbackElement.addEventListener('submit', function (e) {
  e.preventDefault();
  window.location.href = 'home.html';
});
successFeedbackElement.addEventListener('reset', function (e) {
  e.preventDefault();
  window.location.reload();
});

failureFeedbackElement.addEventListener('submit', function (e) {
  e.preventDefault();
  window.location.href = 'home.html';
});
failureFeedbackElement.addEventListener('reset', function (e) {
  e.preventDefault();
  window.location.reload();
});

loadQuestion();
