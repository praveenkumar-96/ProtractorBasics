describe('Log in to Home page', function() {
  it('should have a title', function() {
    browser.ignoreSynchronization=true;
    browser.get('http://9.220.132.53:32323/');
    browser.manage().window().maximize();
    browser.sleep(5000);
    element(by.id('username')).sendKeys('ptest0051');
    element(by.id('password')).sendKeys('r2r123');
    browser.executeScript('window.scrollTo(0,200);').then(function () {
  });
  element(by.id('kc-login')).click();
})
it('should have a title', function() {
    browser.sleep(20000);
    browser.actions().mouseMove(element(by.xpath("/html[1]/body[1]/app-root[1]/main[1]/div[1]/div[1]/div[1]/div[1]/mat-toolbar[1]/button[3]/span[1]/app-icon[1]/img[1]"))).click().perform();
    //browser.actions().mouseMove(element(by.xpath(("//span[@class='mat-button-wrapper'])[3]")))).click();
    browser.sleep(15000);
    browser.actions().mouseMove(element(by.xpath("//span[contains(text(),'New Action')]"))).click().perform();
    browser.sleep(15000);
    element(by.xpath("//input[@id='mat-input-4']")).sendKeys('action_02/03');
    //browser.actions().mouseMove(element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-create-new-log-dialog[1]/div[1]/div[2]/form[1]/div[1]/div[1]/mat-form-field[2]/div[1]/div[1]/div[3]/mat-select[1]/div[1]/div[2]/div[1]'))).click().perform();
    browser.sleep(10000);
    element(by.xpath("//span[contains(text(),'Add New External User')]")).click();
    browser.sleep(10000);
    //element(by.id("//input[@id='mat-input-96']")).sendKeys('praveen');
    element(by.xpath('/html[1]/body[1]/div[2]/div[4]/div[1]/mat-dialog-container[1]/app-external-user-dialog[1]/mat-card[1]/div[2]/form[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[3]/input[1]')).sendKeys('praveen');
    browser.sleep(5000);
    //element(by.xpath("//input[@id='mat-input-97']")).sendKeys('kumar');
   element(by.xpath('/html[1]/body[1]/div[2]/div[4]/div[1]/mat-dialog-container[1]/app-external-user-dialog[1]/mat-card[1]/div[2]/form[1]/div[1]/mat-form-field[2]/div[1]/div[1]/div[3]/input[1]')).sendKeys('kumar');
    browser.sleep(5000);
   //element(by.xpath("//input[@id='mat-input-98']")).sendKeys('praveendhanasu@gmail.com');
   element(by.xpath('/html[1]/body[1]/div[2]/div[4]/div[1]/mat-dialog-container[1]/app-external-user-dialog[1]/mat-card[1]/div[2]/form[1]/div[1]/mat-form-field[3]/div[1]/div[1]/div[3]/input[1]')).sendKeys('praveenkumar.rmk.843355@gmail.com');
    browser.sleep(5000);
    element(by.xpath("//span[contains(text(),'Submit')]")).click();
    browser.sleep(5000);
    browser.actions().mouseMove(element(by.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-create-new-log-dialog[1]/div[1]/div[2]/form[1]/div[1]/div[1]/mat-form-field[3]/div[1]/div[1]/div[3]/mat-select[1]/div[1]/div[2]/div[1]"))).click().perform();
    browser.sleep(5000);
    element(by.xpath("//span[contains(text(),'REQUEST_FOR_CONFIRMATION')]")).click();
    browser.sleep(10000);
    element(by.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-create-new-log-dialog[1]/div[1]/div[2]/form[1]/div[1]/div[2]/mat-form-field[2]/div[1]/div[1]/div[4]/mat-icon[1]")).click();
    browser.sleep(5000);
    element(by.xpath("//div[text()='2']")).click();
    browser.sleep(5000);
    element(by.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-create-new-log-dialog[1]/div[1]/div[2]/form[1]/div[1]/div[2]/mat-form-field[3]/div[1]/div[1]/div[4]/mat-icon[1]")).click();
    browser.sleep(5000);
    element(by.xpath("//div[text()='3']")).click();
    browser.sleep(5000);
    element(by.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-create-new-log-dialog[1]/div[1]/div[2]/form[1]/div[1]/div[3]/mat-form-field[1]/div[1]/div[1]/div[3]/input[1]")).sendKeys('action');
    browser.sleep(5000);
    element(by.xpath('//div[4]//div[1]//app-checkbox[1]//div[1]//button[1]//span[1]//mat-icon[1]')).click();
    browser.sleep(5000);
    browser.actions().mouseMove(element(by.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-create-new-log-dialog[1]/div[1]/div[2]/form[1]/div[1]/div[4]/mat-form-field[1]/div[1]/div[1]/div[3]/mat-select[1]/div[1]/div[2]/div[1]"))).click().perform();
    browser.sleep(5000);
    element(by.xpath("//span[text()=' Weekly ']")).click();
    browser.sleep(5000);
    browser.actions().mouseMove(element(by.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-create-new-log-dialog[1]/div[1]/div[2]/form[1]/div[1]/div[4]/mat-form-field[2]/div[1]/div[1]/div[3]/mat-select[1]/div[1]/div[2]/div[1]"))).click().perform();
    browser.sleep(5000);
    element(by.xpath("//span[text()=' 1WD ']")).click();
    browser.sleep(5000);
    element(by.xpath("//span[contains(text(),'SUBMIT')]")).click();
    browser.sleep(10000);


 //browser.actions(ele(ment(by.xpath('/html[1]/body[1]/app-root[1]/main[1]/div[1]/div[1]/div[1]/div[1]/mat-toolbar[1]/button[3]/span[1]/app-icon[1]/img[1]')).click();
});

});
