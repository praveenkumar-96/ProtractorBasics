describe('validating check box',function(){
  it('clicking check box',function(){
    browser.ignoreSynchronization=true;
    browser.get('https://smartwebby.com/PHP/Phptips2.asp');

    for(var i=1;i<=5;i++){

        element(by.xpath('/html[1]/body[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ol[1]/li[1]/div[1]/form[1]/table[1]/tbody[1]/tr[2]/td[1]/input['+i+']')).click();

    }

    browser.sleep(10000);



  });


});