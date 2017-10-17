var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.toggle();
};

// class BlinkyDancer extends Dancer {
//   constructor(top, left, timeBetweenSteps) {
//     super(top, left, timeBetweenSteps);
    
//   }
  
//   step() {
//     Dancer.prototype.step.call(this);

//     this.$node.toggle();
//   }
// }
