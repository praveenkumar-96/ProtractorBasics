var XLSX = require('xlsx');
describe('Log in Home page', function() {
   it('Creating work unit', function() {
     var workbook = XLSX.readFile('C:\Users\PraveenKumar\Desktop\selenium\SeleniumData.xlsx');
     var worksheet = workbook.Sheets['Sheet1'];
     var cell = 'A2';
     console.log(worksheet[cell].v);
});
});