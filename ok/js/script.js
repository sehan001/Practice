let sessionLength = 25; // in minutes
let breakLength = 5; // in minutes
let minutes = sessionLength;
let seconds = 0;
let timer;
let isSession = true; // flag to track session or break

const timerDisplay = document.getElementById("timer");
const sessionLengthDisplay = document.getElementById("session-length");
const breakLengthDisplay = document.getElementById("break-length");

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    if (isSession) {
      isSession = false;
      minutes = breakLength;
      alert("Session finished! Take a break.");
    } else {
      isSession = true;
      minutes = sessionLength;
      alert("Break finished! Start a new session.");
    }
    seconds = 0;
    updateDisplay();
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  updateDisplay();
}

function startTimer() {
  timer = setInterval(updateTimer, 1000);
  document.getElementById("start").disabled = true;
}

function resetTimer() {
  clearInterval(timer);
  if (isSession) {
    minutes = sessionLength;
  } else {
    minutes = breakLength;
  }
  seconds = 0;
  updateDisplay();
  document.getElementById("start").disabled = false;
}

function increaseSession() {
  sessionLength++;
  if (isSession) {
    minutes = sessionLength;
    seconds = 0;
  }
  updateDisplay();
}

function decreaseSession() {
  if (sessionLength > 1) {
    sessionLength--;
    if (isSession) {
      minutes = sessionLength;
      seconds = 0;
    }
    updateDisplay();
  }
}

function increaseBreak() {
  breakLength++;
  if (!isSession) {
    minutes = breakLength;
    seconds = 0;
  }
  updateDisplay();
}

function decreaseBreak() {
  if (breakLength > 1) {
    breakLength--;
    if (!isSession) {
      minutes = breakLength;
      seconds = 0;
    }
    updateDisplay();
  }
}

function updateDisplay() {
  sessionLengthDisplay.textContent = sessionLength;
  breakLengthDisplay.textContent = breakLength;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}
