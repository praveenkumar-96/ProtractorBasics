describe('get Title',function(){
    it('validation get Title',function(){
        browser.ignoreSynchronization=true;
    browser.get('https://smartwebby.com/PHP/Phptips2.asp');
    browser.manage().window().maximize();
    element(by.name('chkexpert[]')).isSelected().then(function (selected) {
        

        console.log(selected);
    })
     


    });
});