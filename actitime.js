describe('actitime',function(){
    it('actitime',function(){
    browser.ignoreSynchronization=true;
    browser.get('https://www.facebook.com/');
    browser.manage().window().maximize();
   var email = browser.driver.findElement(by.xpath("//input[@id='email']"));
   email.sendKeys('praveendhanasu@gmail.com');
   var pass = browser.driver.findElement(by.xpath("//input[@id='pass']"));
   pass.sendKeys('Hanshika@8'); 
   var fn =browser.driver.findElement(by.xpath("(//input[@class='inputtext _58mg _5dba _2ph-'])[1]"));
   fn.sendKeys('praveen');
   browser.sleep(5000);

    });
});