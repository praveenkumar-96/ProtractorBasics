describe('get Title',function(){
    it('validation get Title',function(){
    browser.get('https://juliemr.github.io/protractor-demo/');
    browser.manage().window().maximize();
    element(by.model('first')).isEnabled().then(function(enabled) {

        if(enabled){

            console.log('True');
        }
        else{

            console.log('false');
        }
        
    })
        


    });
});
    