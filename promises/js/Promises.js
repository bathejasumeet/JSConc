/**
 * Created by sumeet on 23-02-2016.
 */

/*sample promises without chaining*/
var myTimeoutPromise1=new Promise(function(resolve,reject){
    window.setTimeout(function(){
        var res=Boolean(Math.floor((Math.random()*2)));
        res?resolve("myTimeoutPromise1 has been resolved"):reject("myTimeoutPromise1 has been rejected");
    },5000);
    console.log("inside the executor of p1");
});

var myTimeoutPromise2=new Promise(function(resolve,reject){
    window.setTimeout(function(){
        var res=Boolean(Math.floor((Math.random()*2)));
        res?resolve("myTimeoutPromise2 has been resolved"):reject("myTimeoutPromise2 has been rejected");
    },4000);
    console.log("inside the executor of p2");
});

var myTimeoutPromise3=new Promise(function(resolve,reject){
    window.setTimeout(function(){
        var res=Boolean(Math.floor((Math.random()*2)));
        res?resolve("myTimeoutPromise3 has been resolved"):reject("myTimeoutPromise3 has been rejected");
    },3000);
    console.log("inside the executor of p3");
});



myTimeoutPromise1.then(function(msg){
    console.log("without chaining " + msg);
},function(msg){
    console.log("without chaining " + msg);
});

myTimeoutPromise2.then(function(msg){
    console.log("without chaining " + msg);
},function(msg){
    console.log("without chaining " + msg);
});


myTimeoutPromise3.then(function(msg){
    console.log(" without chaining " + msg);
},function(msg){
    console.log(" without chaining " + msg);
});

/*sample promises with chaining*/
var myTimeoutPromise4=new Promise(function(resolve,reject){
    window.setTimeout(function(){
        var res=Boolean(Math.floor((Math.random()*2)));
        res?resolve("myTimeoutPromise4 has been resolved"):reject("myTimeoutPromise4 has been rejected");
    },5000);
    console.log("inside the executor of p4");
});

var myTimeoutPromise5=new Promise(function(resolve,reject){
    window.setTimeout(function(){
        var res=Boolean(Math.floor((Math.random()*2)));
        res?resolve("myTimeoutPromise5 has been resolved"):reject("myTimeoutPromise5 has been rejected");
    },4000);
    console.log("inside the executor of p5");
});

var myTimeoutPromise6=new Promise(function(resolve,reject){
    window.setTimeout(function(){
        var res=Boolean(Math.floor((Math.random()*2)));
        res?resolve("myTimeoutPromise6 has been resolved"):reject("myTimeoutPromise6 has been rejected");
    },3000);
    console.log("inside the executor of p6");
});




myTimeoutPromise4.then(function(msg){
    console.log("with chaining " + msg);
    return myTimeoutPromise5;
},function(msg){
    console.log("with chaining " + msg);
    return myTimeoutPromise5;
}).then(function(msg){
    console.log("with chaining " + msg);
    return myTimeoutPromise6;
},function(msg){
    console.log("with chaining " + msg);
    return myTimeoutPromise6;
}).then(function(msg){
    console.log(" without chaining " + msg);
},function(msg){
    console.log(" without chaining " + msg);
}).then(function(param){
    console.log("just showing off, then returns a thenable and resolves it if nothing is returned , param passed  is " + param);
    return "sample parameter has been passed";
}).then(function(param){
    console.log("just showing off, then returns a thenable and resolves it if nothing is returned , param passed  is " + param);
    throw("na na na na ninja, ninja turtles!!!!!!!!");
}).catch(function(err){
    console.log("you should always add this catch, it is important, else you won't see any errors mate!");
    console.log("caught an error, the error is " + err);
});

/*sample promises with all*/
var myTimeoutPromise7=new Promise(function(resolve,reject){
    window.setTimeout(function(){
        var res=true;
        res?resolve("myTimeoutPromise7 has been resolved"):reject("myTimeoutPromise7 has been rejected");
    },5000);
    console.log("inside the executor of p7");
});

var myTimeoutPromise8=new Promise(function(resolve,reject){
    window.setTimeout(function(){
        var res=true;
        res?resolve("myTimeoutPromise8 has been resolved"):reject("myTimeoutPromise8 has been rejected");
    },4000);
    console.log("inside the executor of p8");
});

var myTimeoutPromise9=new Promise(function(resolve,reject){
    window.setTimeout(function(){
        var res=true;
        res?resolve("myTimeoutPromise9 has been resolved"):reject("myTimeoutPromise9 has been rejected");
    },3000);
    console.log("inside the executor of p9");
});


var myTimeoutPromise10=new Promise(function(resolve,reject){
    window.setTimeout(function(){
        /*just to decrease the probability of failure*/
        var res=Boolean(Math.floor((Math.random()*2)));
        res?resolve("myTimeoutPromise10 has been resolved"):reject("myTimeoutPromise10 has been rejected");
    },3000);
    console.log("inside the executor of p10");
});

myTimeoutPromise7.then(function(msg){
    /*this will be called always, return is important*/
    return Promise.all([myTimeoutPromise8,myTimeoutPromise9,myTimeoutPromise10]);
},function(msg){
    /*this is probably never gonna be called */
}).then(function(msg){
    console.log("interesting message is array "+ typeof(msg)+" : " + msg);
    console.log("promise 10 resolved!! hence all resolved!!");
},function(msg){
    console.log("interesting message is first promise that rejected caused this. Hence msg is of first promise, you ain't getting an array mate! "+ typeof(msg)+" : " + msg);
    console.log("promise 10 borked!! hence all borked!!");
}).catch(function(err){
  console.log("error is " + err);
});