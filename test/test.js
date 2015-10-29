var code = require('../fizzbuzz');
var expect = require('chai').expect;

describe('fizzBuzz', function(){

  it('it should say fizzbuzz when # is divisible by 3 and 5', function() {
    expect(code.fizzBuzz(15,15)).to.equal("FizzBuzz");
  });
  it('it should say Fizz when # is divisible by 3', function() {
    expect(code.fizzBuzz(3,3)).to.equal("Fizz");
  });
  it('it should say Buzz when # is divisible by 5', function() {
    expect(code.fizzBuzz(5,5)).to.equal("Buzz");
  });
})
