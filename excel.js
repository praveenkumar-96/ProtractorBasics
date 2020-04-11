var XLSX = require('xlsx');

//var path = require('path');

var workbook = XLSX.readFile('C:/Users/PraveenKumar/Desktop/selenium/SeleniumData.xlsx');

var firstsheetname = workbook.SheetNames[0];

//var firstsheetname = "Loginpage";

var addressofcell = 'A2';

var worksheet = workbook.Sheets[firstsheetname];

var desiredcell = worksheet[addressofcell];

var desiredvalue = desiredcell.v;

//console.log(desiredvalue);
//console.log(addressofcell);

