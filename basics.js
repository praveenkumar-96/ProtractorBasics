console.log("Hello world");

var a = 10;

console.log(a);

var name = "praveen";

console.log(name);

var ischeck = true;
console.log(ischeck);

var name1 = "praveenkumar";

console.log(name1.length);
console.log(name1.charAt(5));

var firstname ="praveen";

var lastname ="kumar";

console.log(firstname+lastname);
console.log("My first name is \"praveen\"");

var a ="I";
var b = "Love";
var c= "Automation";

console.log(a+20+30+b+c);
console.log(a+(15+20)+b+c);

var a ="praveen";

var b = "kumar";

console.log("the value of a is \"praveen\"" + a);

var a = 10;
var b = 20;

var a = "praveen"
var b = "kumar"
var c = new String("praveen");
console.log(a===c);


var a = 10;
var b = 20;

if(a<b){

console.log("a is lesser than b");
}
else{
    
}


function myfunction(){

    console.log("Automation world");
}

myfunction();

function add(a,b){

    //var sum = a+b;

//console.log(sum);
return(a+b);

}

add(15,15);

function course(){

    this.topic = "protractor";
    this.duration = "20hours";
}

var obj = new course();
console.log(obj.topic+"----"+obj.duration);


function education(name,age){

    this.name=name;
    this.age=age;
}

var obj1 = new education("praveen",24);
console.log("The name is :"+obj1.name+"the roll no is :"+obj1.age);


for(var i=1;i<=10;i++){

    console.log(i);
}



var cources =["selenium","protractor"];

console.log(cources[0]);

var cources = new Array[2];
cources[0] = "selenium";
cources[1] = "protractor";

console.log(cources);
