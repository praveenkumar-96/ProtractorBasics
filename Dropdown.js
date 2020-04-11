describe("log in to wat to atomation",function(){
it("Validation server",function(){
    browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    browser.sleep(3000);
    element(by.buttonText("Customer Login")).click();
    browser.sleep(3000);
    //Working with drop down//
    element.all(by.css("#userSelect option")).then(function(items){

    console.log(items.length);
    browser.sleep(3000);


    element(by.model("custId")).element(by.css("[value='2']")).click();

    browser.sleep(3000);


    element(by.buttonText("Login")).click();

    expect(browser.getTitle()).tocontain("Harry Potter !!");

    for(i=0;i<items.length;i++)
    {
        items[i].getText().then(function(text){
        console.log(text);

        });
    }
 });

});
});