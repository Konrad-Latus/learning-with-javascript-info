it("Raises x to the power n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });



  describe("Raises x to the power n", function() {
    let x = 5;

    let result = x;
    it("5 raised to power 1 is 5", function() {
        assert.equal(pow(x, 1), result);
    });

    it("5 raised to power 2 is 25", function() {
        assert.equal(pow(x, 2), result);
    });

    it("5 raised to power 3 is 125", function() {
        assert.equal(pow(x, 3), result);
    });
    
  })