describe("Binary chop - code kata", function(){
  var evens = [2, 4, 6];

  it("2 is at 0 in [2, 4, 6]", function(){
    expect(firstChop(evens, 2)).toBe(0);
  });
  it("4 is at 1 in [2, 4, 6]", function(){
  	expect(firstChop(evens, 4)).toBe(1);
  });
  it("3 is at -1 in [2, 4, 6]", function(){
  	expect(firstChop(evens, 3)).toBe(-1);
  });
});