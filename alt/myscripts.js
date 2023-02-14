const daysPTag = document.getElementById("days");
const hoursPTag = document.getElementById("hours");
const minutesPTag = document.getElementById("minutes");
const secondsPTag = document.getElementById("seconds");
const changeButton = document.getElementById("changeButton");
const pastIntervals = document.getElementById("pastIntervals");
const numberPTag = document.getElementById("numberPTag");
const inputForm = document.getElementById("inputForm");
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let secondsTimer;
let buttonBoolean = false;
let showRigForm = false;
let myArray = [0, 1, 2, 3];
let fixInput = false;
let rigedInputArray = [];
let randomNumberDistrubution = [2, 1, 0, 3];
let r2 = 0;
let r3 = 0;
let r4 = 0;

function randomizeNumbersInArray() {
  randomNumberDistrubution = [];
  for (let number = 0; number < 4; number++) {
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumberDistrubution.includes(randomNumber)) {
      number = number - 1;
    } else randomNumberDistrubution.push(randomNumber);
  }
  console.log(randomNumberDistrubution);
}

randomizeNumbersInArray();

function startTimer() {
  if (buttonBoolean === false) {
    changeButton.innerHTML = "stop interval";
    secondsTimer = setInterval(CountSeconds, 1000);
    buttonBoolean = true;
  } else if (buttonBoolean === true) {
    changeButton.innerHTML = "Start counting now!";
    stopTimer();
    buttonBoolean = false;
  }
}
function updateTimer() {
  daysPTag.innerHTML = days + " Days";
  hoursPTag.innerHTML = hours + " Hours";
  minutesPTag.innerHTML = minutes + " Minutes";
  secondsPTag.innerHTML = seconds + " Seconds.";
}

function CountSeconds() {
  if (seconds < 59) {
    seconds += 1;
  } else if (seconds === 59) {
    if (minutes === 59) {
      if (hours === 23) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        days += 1;
      } else {
        seconds = 0;
        minutes = 0;
        hours += 1;
      }
    } else {
      seconds = 0;
      minutes += 1;
    }
  }

  updateTimer();
}

function stopTimer() {
  clearInterval(secondsTimer);
  captureInterval();
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimer();
}
function captureInterval() {
  let newInterval = document.createElement("p");
  newInterval.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  pastIntervals.appendChild(newInterval);
}
function showRigTimer() {
  if (showRigForm === false) {
    inputForm.classList.remove("hidden");
    showRigForm = true;
  } else if (showRigForm === true) {
    inputForm.classList.add("hidden");
    showRigForm = false;
  }
}
function compareArrays() {
  insertRandomInput();
}

function insertRandomInput() {
  rigedInputArray = [];
  let rigedInput = document.querySelectorAll("input");

  for (const number of rigedInput) {
    if (number.value >= 1 && number.value <= 23) {
      rigedInputArray.push(parseInt(number.value));
      console.log(rigedInputArray);
    } else {
      alert("this is not a number between 1 and 23");
      return;
    }
  }
  if (buttonBoolean) {
    startTimer();
  }
  
  assignRigedInput();
}
function assignRigedInput() {
  randomizeNumbersInArray();
  for (let i = 0; i < rigedInputArray.length; i++) {
    days = rigedInputArray[randomNumberDistrubution[0]];
    hours = rigedInputArray[randomNumberDistrubution[1]];
    minutes = rigedInputArray[randomNumberDistrubution[2]];
    seconds = rigedInputArray[randomNumberDistrubution[3]];
  }
  updateTimer();
}
