// var SpinningDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.$node = $('<img src="imgs/topBun.png" class="spinningDancer" alt="topBun"></img>');
//   this.setPosition(top, left);
// };
// SpinningDancer.prototype = Object.create(Dancer.prototype);
// SpinningDancer.prototype.constructor = SpinningDancer;

// SpinningDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);

//   //this.$node.animate();
// };


class BottomBun extends Ingredient {
  constructor(x) {
    super();
    this.$node = $('<img src="imgs/bottomBun.png" class="bottomBun" alt="topBun"></img>');

  }
  
  
  
  
  
}