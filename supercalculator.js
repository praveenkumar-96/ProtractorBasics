describe('actitime',function(){
    it('actitime',function(){
    //browser.ignoreSynchronization=true;
    browser.get('https://juliemr.github.io/protractor-demo/');
    browser.manage().window().maximize();
    var fn =browser.driver.findElement(by.xpath("//input[@class='input-small ng-pristine ng-valid ng-touched']"));
      fn.sendKeys('5');
      //element(by.model('first')).sendKeys('4');
      //browser.sleep(5000);


    });
});