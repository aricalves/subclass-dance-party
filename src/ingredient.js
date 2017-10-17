class Ingredient {
  constructor() {
    this.x = window.innerWidth / 2;
    this.y = 0;
    this.$node = $('<img class="ingredient"></img>');
    this.fall();
    this.burgerNumber = window.orderNumber;
  }
  step() {
    setTimeout(this.step.bind(this), 1000 / 30);
  }
  fall() {
    if (this.y === 5) {
      this.x -= this.$node[0].clientWidth / 2;
    }
    if (this.y === window.stackHeight - this.height) {
      window.stackHeight -= this.height;
    }
    if (this.y <= window.stackHeight) {
      this.y++;
      this.setPosition(this.y, this.x);
      setTimeout(this.fall.bind(this), 0.1);
      this.height = this.$node[0].clientHeight;
    }
    /// if this.y <= window.innerHeight - 100 triggers add position to storage
  }
  setPosition(top, left) {
    let pos = {
      top: top,
      left: left
    };
    this.$node.css(pos);
  }
  lineUp() {
  // walk through the storage array 
  // reset the 
    // x value    x * orderNumber
    window.orderNumber++;
    50 + longestimgpixel * ordernumber;
    window.innerwidth / 2 - longestimgpixel - 30;
  }

}

// let t = new Ingredient(10)
// console.log(t)