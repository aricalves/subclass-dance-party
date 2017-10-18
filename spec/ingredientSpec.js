describe('topBun', function() {

  var topBun;

  beforeEach(function() {
    topBun = new TopBun();
  });

  it('should have a jQuery $node object', function() {
    expect(topBun.$node).to.be.an.instanceof(jQuery);
  });
  it('should be and instance of superclass ingredient', function() {
    expect(topBun).to.be.an.instanceof(Ingredient);
  });
  it('should', function() {
    expect(topBun.$node.load(function () {
      return topBun.onScreen;
    })).to.equal(true);
  });
  
  
});


// $node.load(function() {
//       context.fall();
//     });