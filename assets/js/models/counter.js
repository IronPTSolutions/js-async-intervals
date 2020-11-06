class Counter {

  constructor(autoMode = 'up') {
    this.count = 0;
    this.countInterval = undefined;
    this.onCountListener = () => {};
    this.autoMode = autoMode;
  }

  countUp() {
    this.count++;
    this.onCountListener(this.count);
    return this.count;
  }

  countDown() {
    this.count--;
    this.onCountListener(this.count);
    return this.count;
  }

  start() {
    switch (this.autoMode) {
      case 'up':
        this.countInterval = setInterval(this.countUp.bind(this), 1000)
        break
      case 'down':
        this.countInterval = setInterval(this.countDown.bind(this), 1000)
        break
      default:
        throw new Error(`Unknown counter auto mode ${this.autoMode}`);
    }
    
  }

  stop() {
    clearInterval(this.countInterval);
    this.countInterval = undefined;
  }

  reset() {
    this.stop();
    this.count = 0;
  }

}
