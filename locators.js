describe("Practising Loactors",function(){
  it("Working on Model",function(){
  browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
  browser.manage().window().maximize();
  element(by.model("Auth.user.name")).sendKeys("angular");
  element(by.model("Auth.user.password")).sendKeys("password");

  element(by.model("model[options.key]")).sendKeys("raman");
  element(by.buttonText("Login")).click();
  element(by.className("ng-scope")).getText().then(function(text){
   console.log(text);
   expect(text).tocontain("Home");

  });

  });


});