class Ingredient {
  constructor(x) {
    this.x = window.innerWidth / 2;
    this.y = 0;
    this.$node = $('<img class="ingredient"></img>');
    this.fall()
  }
  step() {
    setTimeout(this.step.bind(this), 1000 / 30);
  }
  fall() {
    if (this.y <= window.innerHeight - 100) {
      this.y++;
      this.setPosition(this.y, this.x);
      setTimeout(this.fall.bind(this), 0.1);
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
  
}

// let t = new Ingredient(10)
// console.log(t)