describe('get Title',function(){
    it('validation get Title',function(){
        browser.ignoreSynchronization=true;
    browser.get('https://smartwebby.com/PHP/Phptips2.asp');
    browser.manage().window().maximize();
    

    var expectedText='PHP Multiple Checkboxes';
    element(by.xpath("//h2[contains(text(),'PHP Multiple Checkboxes')]")).getText().then(function(actualText) {
         
    if(expectedText===actualText){

        console.log('Text is matching');
    }
      else{

        console.log('text is not matching');
      } 

    })


    });
});