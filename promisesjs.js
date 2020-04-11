let gettitle = new Promise(function(resolve,reject){

  let titlerecieved = true;

  if(titlerecieved){

    resolve('print the title');

  }

  else{

     reject('reject the title');
  }


});

gettitle.then(function(resolvetext){
  
    console.log(resolvetext);

}).catch(function(rejecttext){
  
    console.log(rejecttext);

});

function add(a,b){

return(a + b);

}

console.log(add(5 + 5));

