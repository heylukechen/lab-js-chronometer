class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime +=1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let twoDigiNumbersString = "";
    let tempValue = String(value);

    // switch (tempValue.length) {
    //   case 1:
    //     twoDigiNumbersString = "0" + tempValue;
    //     break;
    //   case 2:
    //     twoDigiNumbersString = tempValue;
    //     break;
    // }

    if (tempValue.length === 1) {
      twoDigiNumbersString = "0" + tempValue;
    } else if (tempValue.length > 1) {
      twoDigiNumbersString = tempValue;
    }

    return twoDigiNumbersString;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let finalString = `${minutes}:${seconds}`;
    return finalString
  }
}
