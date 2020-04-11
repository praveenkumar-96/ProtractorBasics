describe('demo actirime',function(){
   it('verifying login page',function(){
    browser.ignoreSynchronization=true; 
   browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');   
   element(by.buttonText("Customer Login")).click();
    
   browser.getTitle().then(function(title){
    
    console.log(title);

    if(title==="Protractor practice website - Banking App"){

        console.log("true");
    }
      
    else{

        console.log("false");
    }

   });



 });
});