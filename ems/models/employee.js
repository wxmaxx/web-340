/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   11 December 2017
; Modified By: Leon Maxwell
; Modified date: 28 September 2018
; Description: EMS employee model page
;===========================================
*/

// required
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// define the employeeSchema
var employeeSchema = new Schema({
  name: String
});

// define the employee model
var Employee = mongoose.model("Employee", employeeSchema);

// expose the employee to calling files
module.exports = Employee;
