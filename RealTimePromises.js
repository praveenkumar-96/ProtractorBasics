describe('validating checkbox',function(){
  it('checkbox validation', async function(){
  browser.ignoreSynchronization=true;
  browser.get('http://www.tizag.com/htmlT/htmlcheckboxes.php');

/* var value_of_index = function(index){

    element(by.xpath('//div[4]/input['+index+']')).getAttribute('value').then(function(title){

        console.log(title + 'getting the checkbox no is:'+index);


  })
}*/

  for(var i=1;i<=4;i++){

    element(by.xpath('//div[4]/input['+i+']')).click();

    var text =  await element(by.xpath('//div[4]/input['+i+']')).getAttribute('value');

    console.log(text);
  }

    /*element(by.xpath('//div[4]/input['+index+']')).getAttribute('value').then(function(title){

        console.log(title + 'getting the checkbox no is:'+index);
  });*/
 browser.sleep(5000);
 });
});
