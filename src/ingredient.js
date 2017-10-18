class Ingredient {
  constructor(node) {
    this.x = window.innerWidth - 219 / 2;
    this.y = 0;
    this.onScreen = false;
    this.burgerNumber = window.orderNumber;
    this.landed = false;
    this.$node = node;
    var context = this;
    this.$node.load(function() {
      context.fall();
    });
  }
  step() {
    setTimeout(this.step.bind(this), 1000 / 30);
  }
  isFirstTimeOnScreen() {
    if (this.y > 0 && !this.onScreen) {
      this.onScreen = true;
      return true;
    }
    return false;
  }
  fall() {
    if (this.isFirstTimeOnScreen()) {
      this.x -= this.$node[0].clientWidth / 2;
    }
    if (this.isLanded()) {
      window.stackHeight -= this.height;
    }
    if (this.y <= window.stackHeight) {
      this.y += 5;
      this.setPosition(this.y, this.x);
      setTimeout(this.fall.bind(this), 0);
      this.height = this.$node[0].clientHeight;
    }
  }
  isLanded() {
    if (this.y >= window.stackHeight - this.height && !this.landed) {
      this.landed = true;
      return true;
    }
    return false;
  }
  setPosition(top, left) {
    let pos = {
      top: top,
      left: left
    };
    this.$node.css(pos);
  }
  lineUp() {
    window.orderNumber++;
    50 + longestimgpixel * ordernumber;
    window.innerwidth / 2 - longestimgpixel - 30;
  }
  
}
