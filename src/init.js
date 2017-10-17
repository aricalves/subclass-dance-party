$(document).ready(function() {
  window.burgerStack = [];
  window.orderNumber = 1;
  window.stackHeight = window.innerHeight - 25;

  $('.addDancerButton').on('click', function(event) {

    let burgerMakerFunctionName = $(this).data('burger-maker-function-name');
   
    
    let ingredient = eval(`new ${burgerMakerFunctionName}()`);
    
    $('body').append(ingredient.$node);
    window.burgerStack.push(ingredient);
  });
  
  
});

