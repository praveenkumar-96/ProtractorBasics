var XLSX = require('xlsx');
var workbook = XLSX.readFile('C:/Users/PraveenKumar/Desktop/selenium/SeleniumData.xlsx');
var worksheet = workbook.Sheets['Sheet2'];
  describe('Login in Admin Page',function(){
      it('validating user name and password',function(){
      browser.ignoreSynchronization=true;
      browser.get(worksheet['C2'].v);
      browser.manage().window().maximize();
      browser.sleep('5000');
      element(by.id('username')).sendKeys(worksheet['A2'].v);
      browser.sleep('3000');
      element(by.id('password')).sendKeys(worksheet['B2'].v);
      browser.sleep('3000');
      browser.executeScript('window.scrollTo(0,200);');
      element(by.id("kc-login")).click();
      browser.sleep('60000');
      browser.getTitle().then(function(title){
         
    console.log(title);

      });
      /*
      element(by.id('mat-input-1')).sendKeys(worksheet['D2'].v);
      browser.sleep('5000');
     // browser.actions().mouseMove(element(by.xpath("//mat-select[@id='mat-select-1']//div[@class='mat-select-arrow']"))).click().perform();
     element(by.xpath("//mat-select[@id='mat-select-1']//div[@class='mat-select-arrow']")).click();
      browser.sleep(10000);
     // element(by.xpath("//span[contains(text(),'"worksheet['G5'].v")]")).click();
      element(by.xpath("//span[contains(text(),'"+worksheet['G5'].v+"')]")).click();

      browser.sleep(10000);

     /* element(by.xpath("//mat-select[@id='mat-select-2']//div[@class='mat-select-arrow-wrapper']")).click();
      element(by.xpath("//span[contains(text(),'"+worksheet['H2'].v+"')]")).click();
      browser.sleep(10000);
      element(by.xpath("//mat-select[@id='mat-select-3']//div[@class='mat-select-arrow-wrapper']")).click();
      element(by.xpath("//span[contains(text(),'"+worksheet['I2'].v+"')]")).click();
      browser.sleep(10000);

      element(by.xpath("//span[contains(text(),'"+worksheet['I2'].v+"')]")).getText().then(function(text){

          console.log(text);    
          });*/




 });

});