require ( './helpers.js' );

const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

function receivesAFunction(callback) {
    callback();
  }
  
function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }
  //returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }