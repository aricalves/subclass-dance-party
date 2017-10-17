$(document).ready(function() {
  window.burgerStack = [];
  window.orderNumber = 0;
  window.stackHeight = window.innerHeight - 25;
  window.currentStack = [];

  $('.addIngredient').on('click', function(event) {

    let burgerMakerFunctionName = $(this).data('burger-maker-function-name');
   
    
    let ingredient = eval(`new ${burgerMakerFunctionName}()`);
    $('body').append(ingredient.$node);
    window.currentStack.push(ingredient);
  });
  
  // $('.removeTopIngredient').on('click', function() {
  //    window.currentStack.pop();
  // });
  
  
  $('.newOrder').on('click', function() {
    window.currentStack.forEach((node) => {
    
      let newX = (230 / 2 + orderNumber * 219) - node.$node[0].clientWidth / 2;
      node.setPosition(node.y, newX);
    });
    
    
    window.burgerStack.push(window.currentStack);
    window.currentStack = [];
    window.stackHeight = window.innerHeight - 25;
    window.orderNumber++;
  });
  
  
});

