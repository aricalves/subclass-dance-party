$(document).ready(function() {
  window.burgerStack = [];
  window.orderNumber = 0;
  window.stackHeight = window.innerHeight - 25;
  window.currentStack = [];

  $('.addIngredient').on('click', function() {

    let burgerMakerFunctionName = $(this).data('burger-maker-function-name');
    if (window.currentStack.length === 0 && burgerMakerFunctionName !== 'BottomBun') {
      alert('Start your burger with a bottom bun!');
      return;
    }
    let ingredient = eval(`new ${burgerMakerFunctionName}()`);
    $('body').append(ingredient.$node);
    window.currentStack.push(ingredient);
  });
  
  let rotate = {};
  
  $('body').on('click', 'img.ingredient', function() {
    rotate[this] = rotate[this] || 90;
    $(this).css({'transform': 'rotate(' + rotate[this] + 'deg)'});
    if (rotate[this] === 360) {
      rotate[this] = -90;
    }
    rotate[this] += 90;
    return $(this);
  });
  
  $('.newOrder').on('click', function() {
    if (window.currentStack.length > 0) {
      window.currentStack.forEach((node) => { 
        let newX = (230 / 2 + orderNumber * 219) - node.$node[0].clientWidth / 2;
        node.setPosition(node.y, newX);
      });
      window.burgerStack.push(window.currentStack);
      window.currentStack = [];
      window.stackHeight = window.innerHeight - 25;
      window.orderNumber++;
    }
  });
    
});

