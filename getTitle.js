describe('get Title',function(){
it('validation get Title',function(){
browser.get('https://juliemr.github.io/protractor-demo/');
browser.manage().window().maximize();

var expectedtitle='Super Calculator';
browser.getTitle().then(function(acutaltitle) {
    
    if(expectedtitle===acutaltitle){

        console.log('Title is matching');
    }
    else{

        console.log('Title is not matching')
    }

});



});
});