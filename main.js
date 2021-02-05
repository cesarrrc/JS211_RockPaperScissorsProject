// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

  // When input is entered, it will be called here and scrubbed
  // of its white space and make all the letters lower-cased and
  // then stored in the appropriate variables.
  hand1 = hand1.trim().toLowerCase();
  hand2 = hand2.trim().toLowerCase();


  // this if(statement) will return a draw if the
  // argument passed in are BOTH the same.
  if (hand1 === hand2)  {
    return "The Game is a draw!";
  } 
  // these else if(statements) will compare hand1 and hand2
  // by using conditional statements (&&) and declare a winner
  // on the argument pass through. 
  else if (hand1 === "rock" && hand2 === "paper")  {
    return "Hand 2 WINS!";
  } else if (hand1 === "paper" && hand2 === "scissors")  {
    return "Hand 2 WINS!";
  } else if (hand1 === "scissors" && hand2 === "rock")  {
    return "Hand 2 WINS!";
  } else if (hand1 === "paper" && hand2 === "rock")  {
    return "Hand 1 WINS!";
  } else if (hand1 === "scissors" && hand2 === "paper")  {
    return "Hand 1 WINS!";
  } else if (hand1 === "rock" && hand2 === "scissors")  {
    return "Hand 1 WINS!";
  }
  // Use the unit test to see what is expected

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "The Game is a draw!");
      assert.equal(rockPaperScissors('paper', 'paper'), "The Game is a draw!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "The Game is a draw!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand 2 WINS!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand 2 WINS!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand 1 WINS!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand 2 WINS!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand 2 WINS!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand 1 WINS!");
    });
  });

  // below are additional Unit Tests

  describe('additional RPS Unit Test Assigment', function(){

    it('should scrub white space before and after the input', function(){
      let actual = rockPaperScissors('   roc   k', '  pa   p e   r')
      let expected = 'Hand 2 WINS!'
      assert.equal(actual, expected)
    })

    it('should detect no input has been typed', function(){
      let actual = rockPaperScissors('', "  ")
      let expected = 'You must type something in and try again!'
      assert.equal(actual, expected)
    })

    it('should not allow input to be a bad word', function(){
      let actual = rockPaperScissors('poopoo', 'peepee')
      let expected = "Please don't use bad language"
      assert.equal(actual, expected)
    })

    it('can handle numbers with greaternumber being the winner', function(){
      let actual = rockPaperScissors('10', '05')
      let expected = "Hand 1 WINS!"
      assert.equal(actual, expected)
    })

    it('can handle spanish words and declare a winner', function(){
      let actual = rockPaperScissors("pierda", "papel")
      let expected = 'Hand 2 WINS!'
      assert.equal(actual, expected)
    })

  })

  
} else {


  // always returns ask the user for another input
  getPrompt();

}
