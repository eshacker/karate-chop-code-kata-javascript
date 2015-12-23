describe("Binary chop - code kata", function(){
  var evens = [2, 4, 6];
  describe("first chop", function(){
    it("3 is at -1 in []", function(){
      expect(firstChop([], 3)).toBe(-1);
    });
    it("3 is at -1 in [1]", function(){
      expect(firstChop([1], 3)).toBe(-1);
    });
    it("1 is at  0 in [1]", function(){
      expect(firstChop([1], 1)).toBe(0);
    });
    it("0 is at -1 in [2, 4, 6]", function(){
      expect(firstChop(evens, 0)).toBe(-1);
    });
    it("1 is at -1 in [2, 4, 6]", function(){
      expect(firstChop(evens, 1)).toBe(-1);
    });
    it("2 is at  0 in [2, 4, 6]", function(){
      expect(firstChop(evens, 2)).toBe(0);
    });
    it("3 is at -1 in [2, 4, 6]", function(){
      expect(firstChop(evens, 3)).toBe(-1);
    });
    it("4 is at  1 in [2, 4, 6]", function(){
      expect(firstChop(evens, 4)).toBe(1);
    });
    it("5 is at -1 in [2, 4, 6]", function(){
      expect(firstChop(evens, 5)).toBe(-1);
    });
    it("6 is at  2 in [2, 4, 6]", function(){
      expect(firstChop(evens, 6)).toBe(2);
    });
    it("7 is at -1 in [2, 4, 6]", function(){
      expect(firstChop(evens, 7)).toBe(-1);
    });
  });
  describe("second chop", function(){
    it("3 is at -1 in []", function(){
      expect(secondChop([], 3)).toBe(-1);
    });
    it("3 is at -1 in [1]", function(){
      expect(secondChop([1], 3)).toBe(-1);
    });
    it("1 is at  0 in [1]", function(){
      expect(secondChop([1], 1)).toBe(0);
    });
    it("0 is at -1 in [2, 4, 6]", function(){
      expect(secondChop(evens, 0)).toBe(-1);
    });
    it("1 is at -1 in [2, 4, 6]", function(){
      expect(secondChop(evens, 1)).toBe(-1);
    });
    it("2 is at  0 in [2, 4, 6]", function(){
      expect(secondChop(evens, 2)).toBe(0);
    });
    it("3 is at -1 in [2, 4, 6]", function(){
      expect(secondChop(evens, 3)).toBe(-1);
    });
    it("4 is at  1 in [2, 4, 6]", function(){
      expect(secondChop(evens, 4)).toBe(1);
    });
    it("5 is at -1 in [2, 4, 6]", function(){
      expect(secondChop(evens, 5)).toBe(-1);
    });
    it("6 is at  2 in [2, 4, 6]", function(){
      expect(secondChop(evens, 6)).toBe(2);
    });
    it("7 is at -1 in [2, 4, 6]", function(){
      expect(secondChop(evens, 7)).toBe(-1);
    });
  });
});
