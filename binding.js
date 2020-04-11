describe("Practising Loactors",function(){
    it("Working on binding",function(){
    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
    browser.manage().window().maximize();
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("3");
    element(by.buttonText("Go!")).click();
    element(by.binding("latest")).getText().then(function(text){
    console.log(text);
    browser.getTitle().then(function(title){
       console.log(title);
       if(title==="Protractor practice website - Calculator"){

        console.log("pass");
    }
    else{
        console.log("fail");
    }
    });
   

    });

    });
});