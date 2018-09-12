/*
============================================
; Title:  Mocha and Chai test example
; Author: Professor Krasso 
; Date:   12 December 2017
; Modified By: Leon Maxwell
; Modified date: 8 September 2018
; Description: testing with Mocha and Chai
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 7.3")); 
console.log("\n");

// declare variables and includes

var fruits = require("../maxwell-fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Apple', 'Orange', 'Mango');
        assert(Array.isArray(f));
    });
});
