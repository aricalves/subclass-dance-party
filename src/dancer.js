var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.time = timeBetweenSteps;
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
  this.step();
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.time);
};

Dancer.prototype.setPosition = function(top, left) {
  
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


// class Dancer {
//   constructor() {
//     this.$node = $('<span class="dancer"></span>');
//     this.time = timeBetweenSteps;
//     this.setPosition(top, left);
//     this.top = top;
//     this.left = left;
//     this.step();
//   }
//   step() {
//     setTimeout(this.step.bind(this), this.time);
//   }
//   setPosition(top, left) {
//     const styleSettings = {
//       top: top,
//       left: left
//     };
//     this.$node.css(styleSettings);
//   }
// }
