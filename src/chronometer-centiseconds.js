class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    return Math.floor((this.currentTime % 6000) % 100);
  }

  computeTwoDigitNumber(value) {
    let twoDigiNumbersString = "";
    let tempValue = String(value);
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
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    let finalString = `${minutes}:${seconds}.${centiSeconds}`;
    return finalString  }
}
