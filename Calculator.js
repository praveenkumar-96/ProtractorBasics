var XLSX = require('xlsx');
var workbook = XLSX.readFile('C:/Users/PraveenKumar/Desktop/selenium/ProtractorCalculator.xlsx');
var worksheet = workbook.Sheets['Sheet1'];
const m = worksheet['A9'].v;
const N = worksheet['A12'].v;
describe('calculator', function () {
    it('validating calculator', function () {
        browser.get(worksheet['A2'].v);
        browser.manage().window().maximize();
        for (i = m; i <= N; i++) {
            element(by.model('first')).sendKeys(worksheet['B'+i].v);
            browser.sleep(2000);
            element(by.model('second')).sendKeys(worksheet['C'+i].v);
            browser.sleep(2000);
            element(by.buttonText('Go!')).click();
            browser.sleep(3000);
        }
    });
});

