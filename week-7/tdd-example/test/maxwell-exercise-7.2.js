/*
============================================
; Title:  TDD in action
; Author: Professor Krasso 
; Date:   12 December 2017
; Modified By: Leon Maxwell
; Modified date: 8 September 2018
; Description: testing with Mocha
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 7.2")); 
console.log("\n");

//require statements
var assert = require("assert");

describe("String#split", function() {
    it("should return an arry of fruits", function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});