// Toggles

let isTimerDone = false;

let isBreadinToaster = false;

let isToast = false;

// bread variable
const bread = {
  size: [60, 40, 5],
  brunPoint: 600,
  toastPoint: 300,
  currentTemp: 20,
};

// toaster variable
const toaster = {
  slots: 4,
  button: (e) => {
    if (e) {
      return true;
    }
    return false;
  },
};

/* FUNCTIONS */

// cageDown
function cagedown(e) {
  if (e) {
    // turn on heat
    //start timer
    setTimer();
  }
}

// cageUp TODO: merge with cagedown function
function cageUp(e) {}

// timer
function setTime(e, time = 120) {
  if (e) {
    // run activate heat
    activateHeat();
    // start timer at length of time argument
  }
  // TODO: this doesn't feel right: toggle cage & disable heat element
}

// activateHeat
function activateHeat() {
  // turn on heat element
  // increase bread temperture
  //TODO: as loop increases, apply value to bread current temp conistently
}
