
let timer;
let time = 60; // Initial time in seconds (1 minute)
let pausedTime;

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById('timer').innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  const inputTime = parseInt(document.getElementById('countdown-time').value, 10);
  if (!isNaN(inputTime) && inputTime > 0) {
    time = inputTime;
    updateTimer();
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateTimer();
      } else {
        clearInterval(timer);
        alert('Time is up!');
      }
    }, 1000);
  } else {
    alert('Please enter a valid countdown time (in seconds).');
  }
}

function stopTimer() {
  clearInterval(timer);
  pausedTime = time;
  document.getElementById('stopBtn').innerText = 'Continue';
  document.getElementById('stopBtn').onclick = continueTimer;
}

function continueTimer() {
  if (pausedTime > 0) {
    time = pausedTime;
    updateTimer();
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateTimer();
      } else {
        clearInterval(timer);
        alert('Time is up!');
      }
    }, 1000);
    document.getElementById('stopBtn').innerText = 'Stop';
    document.getElementById('stopBtn').onclick = stopTimer;
  } else {
    alert('Timer has not been stopped yet.');
  }
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById('countdown-time').value = 60; // Reset input field to default value
  time = 60; // Reset time to 1 minute
  updateTimer();
  document.getElementById('stopBtn').innerText = 'Stop';
  document.getElementById('stopBtn').onclick = stopTimer;
}
