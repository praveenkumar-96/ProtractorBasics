describe("calculator",function(){

    beforeEach(function(){

        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');


    })

    afterEach(function(){
     browser.sleep(3000);


    });
  it('validating calculator',function(){

  element(by.model('first')).sendKeys('1');
  element(by.model('second')).sendKeys('1');
  element(by.buttonText('Go!')).click();
  element(by.binding('latest')).getText().then(function(text){
    console.log(text);
});
});

it('validating calculator',function(){
    element(by.model('first')).sendKeys('2');
    element(by.model('second')).sendKeys('2');
    element(by.buttonText('Go!')).click();
    element(by.binding('latest')).getText().then(function(text){
      console.log(text);
  });
  });

  it('validating calculator',function(){
    element(by.model('first')).sendKeys('3');
    element(by.model('second')).sendKeys('3');
    element(by.buttonText('Go!')).click();
    element(by.binding('latest')).getText().then(function(text){
      console.log(text);
  });
  });


});