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
  it('should initialize with a y-value of zero', function() {
    expect(topBun.y).to.equal(0);
  });
  
  
});

describe('lettuce', function() {
  var lettuce;

  beforeEach(function() {
    lettuce = new Lettuce();
  });

  it('should source the image correctly', function() {
    expect(lettuce.$node[0].src.slice(-11)).to.equal('lettuce.png');
  });
  it('should have a jQuery $node object', function() {
    expect(lettuce.$node).to.be.an.instanceof(jQuery);
  });
  it('should be and instance of superclass ingredient', function() {
    expect(lettuce).to.be.an.instanceof(Ingredient);
  });
  it('should initialize with a y-value of zero', function() {
    expect(lettuce.y).to.equal(0);
  });
  
});

describe('tomato', function() {
  var tomato;

  beforeEach(function() {
    tomato = new Tomato();
  });

  it('should source the image correctly', function() {
    expect(tomato.$node[0].src.slice(-10)).to.equal('tomato.png');
  });
  it('should have a jQuery $node object', function() {
    expect(tomato.$node).to.be.an.instanceof(jQuery);
  });
  it('should be and instance of superclass ingredient', function() {
    expect(tomato).to.be.an.instanceof(Ingredient);
  });
  it('should initialize with a y-value of zero', function() {
    expect(tomato.y).to.equal(0);
  });
  
});

describe('cheese', function() {
  var cheese;

  beforeEach(function() {
    cheese = new Cheese();
  });

  it('should source the image correctly', function() {
    expect(cheese.$node[0].src.slice(-10)).to.equal('cheese.png');
  });
  it('should have a jQuery $node object', function() {
    expect(cheese.$node).to.be.an.instanceof(jQuery);
  });
  it('should be and instance of superclass ingredient', function() {
    expect(cheese).to.be.an.instanceof(Ingredient);
  });
  it('should initialize with a y-value of zero', function() {
    expect(cheese.y).to.equal(0);
  });
  
});

describe('patty', function() {
  var patty;

  beforeEach(function() {
    patty = new Patty();
  });

  it('should source the image correctly', function() {
    expect(patty.$node[0].src.slice(-9)).to.equal('patty.png');
  });
  it('should have a jQuery $node object', function() {
    expect(patty.$node).to.be.an.instanceof(jQuery);
  });
  it('should be and instance of superclass ingredient', function() {
    expect(patty).to.be.an.instanceof(Ingredient);
  });
  it('should initialize with a y-value of zero', function() {
    expect(patty.y).to.equal(0);
  });
  
});

describe('bottomBun', function() {
  var bottomBun;

  beforeEach(function() {
    bottomBun = new BottomBun();
  });

  it('should source the image correctly', function() {
    expect(bottomBun.$node[0].src.slice(-13)).to.equal('bottomBun.png');
  });
  it('should have a jQuery $node object', function() {
    expect(bottomBun.$node).to.be.an.instanceof(jQuery);
  });
  it('should be and instance of superclass ingredient', function() {
    expect(bottomBun).to.be.an.instanceof(Ingredient);
  });
  it('should initialize with a y-value of zero', function() {
    expect(bottomBun.y).to.equal(0);
  });
  
});


