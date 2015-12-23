CodeKata - Karate Chop - http://codekata.com/kata/kata02-karate-chop/
---

Basically a binary search code kata that is to be done for five days and output should be binary search in five ways. Cool.

 - Should be done in five ways as per demand.
 - Should contain tests.
 - Should be quick and easy to run.
 - Each way can have it's own directory.


<hr />

Note: Following data is copied in good faith - to reflect what code here contains. It's in no way to infringe the IP or copyright of the original author of the Kata.

<hr />

Goals
---

This Kata has three separate goals:

 - As you’re coding each algorithm, keep a note of the kinds of error you encounter. A binary search is a ripe breeding ground for “off by one” and fencepost errors. As you progress through the week, see if the frequency of these errors decreases (that is, do you learn from experience in one technique when it comes to coding with a different technique?).

 - What can you say about the relative merits of the various techniques you’ve chosen? Which is the most likely to make it in to production code? Which was the most fun to write? Which was the hardest to get working? And for all these questions, ask yourself “why?”.

 - It’s fairly hard to come up with five unique approaches to a binary chop. How did you go about coming up with approaches four and five? What techniques did you use to fire those “off the wall” neurons?


Specification
---

Write a binary chop method that takes an integer search target and a sorted array of integers. It should return the integer index of the target in the array, or -1 if the target is not in the array. The signature will logically be:

    chop(int, array_of_int)  -> int

You can assume that the array has less than 100,000 elements. For the purposes of this Kata, time and memory performance are not issues (assuming the chop terminates before you get bored and kill it, and that you have enough RAM to run it).

Test Data
---

Here is the Test::Unit code I used when developing my methods. Feel free to add to it. The tests assume that array indices start at zero. You’ll probably have to do a couple of global search-and-replaces to make this compile in your language of choice (unless your enlightened choice happens to be Ruby).

    def test_chop
      assert_equal(-1, chop(3, []))
      assert_equal(-1, chop(3, [1]))
      assert_equal(0,  chop(1, [1]))
      #
      assert_equal(0,  chop(1, [1, 3, 5]))
      assert_equal(1,  chop(3, [1, 3, 5]))
      assert_equal(2,  chop(5, [1, 3, 5]))
      assert_equal(-1, chop(0, [1, 3, 5]))
      assert_equal(-1, chop(2, [1, 3, 5]))
      assert_equal(-1, chop(4, [1, 3, 5]))
      assert_equal(-1, chop(6, [1, 3, 5]))
      #
      assert_equal(0,  chop(1, [1, 3, 5, 7]))
      assert_equal(1,  chop(3, [1, 3, 5, 7]))
      assert_equal(2,  chop(5, [1, 3, 5, 7]))
      assert_equal(3,  chop(7, [1, 3, 5, 7]))
      assert_equal(-1, chop(0, [1, 3, 5, 7]))
      assert_equal(-1, chop(2, [1, 3, 5, 7]))
      assert_equal(-1, chop(4, [1, 3, 5, 7]))
      assert_equal(-1, chop(6, [1, 3, 5, 7]))
      assert_equal(-1, chop(8, [1, 3, 5, 7]))
    end

Posted by Dave Thomas (@PragDave) Dec 28th, 2013 

<hr />


Using repository
---

`git clone https://github.com/learn-es/karate-chop-code-kata-javascript.git kcckj && cd kcckj && npm install && npm test && grunt`

And that's pretty much it.

Let me know if I missed anything here.

<hr />

License: MIT for @eshacker's work.


Original problems, code kata definition and original test/code/data belongs to @PragDave.
