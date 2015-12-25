describe("Binary chop - code kata", function(){
  var evens = [2, 4, 6];
  var firstTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    it("every number is at it's respective offset in first ten digits.",function() {
      expect(firstChop(firstTen, 0)).toBe(0);
      expect(firstChop(firstTen, 1)).toBe(1);
      expect(firstChop(firstTen, 2)).toBe(2);
      expect(firstChop(firstTen, 3)).toBe(3);
      expect(firstChop(firstTen, 4)).toBe(4);
      expect(firstChop(firstTen, 5)).toBe(5);
      expect(firstChop(firstTen, 6)).toBe(6);
      expect(firstChop(firstTen, 7)).toBe(7);
      expect(firstChop(firstTen, 8)).toBe(8);
      expect(firstChop(firstTen, 9)).toBe(9);
    });
    describe("Testing with squares of first ten digits...", function() {
      it("Squares of 0 and 1 are at their respective indices:", function(){
        expect(firstChop(firstTen, 0*0)).toBe(0);
        expect(firstChop(firstTen, 1*1)).toBe(1);
      });
      it("Squares of 2 and 3 are in the first ten digits:", function(){
        expect(firstChop(firstTen, 2*2)).toBe(4);
        expect(firstChop(firstTen, 3*3)).toBe(9);
      });
      it("Squares of 4 and above numbers are not in the first ten digits:", function(){
        expect(firstChop(firstTen, 4*4)).toBe(-1);
        expect(firstChop(firstTen, 5*5)).toBe(-1);
        expect(firstChop(firstTen, 6*6)).toBe(-1);
        expect(firstChop(firstTen, 7*7)).toBe(-1);
        expect(firstChop(firstTen, 8*8)).toBe(-1);
        expect(firstChop(firstTen, 9*9)).toBe(-1);
      });
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
    it("every number is at it's respective offset in first ten digits.",function() {
      expect(secondChop(firstTen, 0)).toBe(0);
      expect(secondChop(firstTen, 1)).toBe(1);
      expect(secondChop(firstTen, 2)).toBe(2);
      expect(secondChop(firstTen, 3)).toBe(3);
      expect(secondChop(firstTen, 4)).toBe(4);
      expect(secondChop(firstTen, 5)).toBe(5);
      expect(secondChop(firstTen, 6)).toBe(6);
      expect(secondChop(firstTen, 7)).toBe(7);
      expect(secondChop(firstTen, 8)).toBe(8);
      expect(secondChop(firstTen, 9)).toBe(9);
    });
    describe("Testing with squares of first ten digits...", function() {
      it("Squares of 0 and 1 are at their respective indices:", function(){
        expect(secondChop(firstTen, 0*0)).toBe(0);
        expect(secondChop(firstTen, 1*1)).toBe(1);
      });
      it("Squares of 2 and 3 are in the first ten digits:", function(){
        expect(secondChop(firstTen, 2*2)).toBe(4);
        expect(secondChop(firstTen, 3*3)).toBe(9);
      });
      it("Squares of 4 and above numbers are not in the first ten digits:", function(){
        expect(secondChop(firstTen, 4*4)).toBe(-1);
        expect(secondChop(firstTen, 5*5)).toBe(-1);
        expect(secondChop(firstTen, 6*6)).toBe(-1);
        expect(secondChop(firstTen, 7*7)).toBe(-1);
        expect(secondChop(firstTen, 8*8)).toBe(-1);
        expect(secondChop(firstTen, 9*9)).toBe(-1);
      });
    });
  });
  describe("third chop", function(){
    it("3 is at -1 in []", function(){
      expect(thirdChop([], 3)).toBe(-1);
    });
    it("3 is at -1 in [1]", function(){
      expect(thirdChop([1], 3)).toBe(-1);
    });
    it("1 is at  0 in [1]", function(){
      expect(thirdChop([1], 1)).toBe(0);
    });
    it("0 is at -1 in [2, 4, 6]", function(){
      expect(thirdChop(evens, 0)).toBe(-1);
    });
    it("1 is at -1 in [2, 4, 6]", function(){
      expect(thirdChop(evens, 1)).toBe(-1);
    });
    it("2 is at  0 in [2, 4, 6]", function(){
      expect(thirdChop(evens, 2)).toBe(0);
    });
    it("3 is at -1 in [2, 4, 6]", function(){
      expect(thirdChop(evens, 3)).toBe(-1);
    });
    it("4 is at  1 in [2, 4, 6]", function(){
      expect(thirdChop(evens, 4)).toBe(1);
    });
    it("5 is at -1 in [2, 4, 6]", function(){
      expect(thirdChop(evens, 5)).toBe(-1);
    });
    it("6 is at  2 in [2, 4, 6]", function(){
      expect(thirdChop(evens, 6)).toBe(2);
    });
    it("7 is at -1 in [2, 4, 6]", function(){
      expect(thirdChop(evens, 7)).toBe(-1);
    });
    it("every number is at it's respective offset in first ten digits.",function() {
      expect(thirdChop(firstTen, 0)).toBe(0);
      expect(thirdChop(firstTen, 1)).toBe(1);
      expect(thirdChop(firstTen, 2)).toBe(2);
      expect(thirdChop(firstTen, 3)).toBe(3);
      expect(thirdChop(firstTen, 4)).toBe(4);
      expect(thirdChop(firstTen, 5)).toBe(5);
      expect(thirdChop(firstTen, 6)).toBe(6);
      expect(thirdChop(firstTen, 7)).toBe(7);
      expect(thirdChop(firstTen, 8)).toBe(8);
      expect(thirdChop(firstTen, 9)).toBe(9);
    });
    describe("Testing with squares of first ten digits...", function() {
      it("Squares of 0 and 1 are at their respective indices:", function(){
        expect(thirdChop(firstTen, 0*0)).toBe(0);
        expect(thirdChop(firstTen, 1*1)).toBe(1);
      });
      it("Squares of 2 and 3 are in the first ten digits:", function(){
        expect(thirdChop(firstTen, 2*2)).toBe(4);
        expect(thirdChop(firstTen, 3*3)).toBe(9);
      });
      it("Squares of 4 and above numbers are not in the first ten digits:", function(){
        expect(thirdChop(firstTen, 4*4)).toBe(-1);
        expect(thirdChop(firstTen, 5*5)).toBe(-1);
        expect(thirdChop(firstTen, 6*6)).toBe(-1);
        expect(thirdChop(firstTen, 7*7)).toBe(-1);
        expect(thirdChop(firstTen, 8*8)).toBe(-1);
        expect(thirdChop(firstTen, 9*9)).toBe(-1);
      });
    });
  });
});
