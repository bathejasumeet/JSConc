/**
 * Created by sumeet on 03-03-2016.
 */
/*JAVASCRIPT FUNCTIONS ARE OBJECTS , you have to objectify them, they have no feelings
1.you can pass them
2.they can have their own properties and methods, OBJECTIFICATION TO THE CORE
 */

function myObjectifiedFunction(){
    console.log("I am an objectified function");
}

var myObjectifiedFunctionReference=myObjectifiedFunction;

function callTheFunctionToBragObjectification(callback){
    callback();
}

callTheFunctionToBragObjectification(myObjectifiedFunctionReference);
callTheFunctionToBragObjectification(myObjectifiedFunction);

myObjectifiedFunction.myFunctionProperty="a function property!";
myObjectifiedFunction.myFunctionMethod=function(){ console.log("I am a method attached to myObjectifiedFunction, and I have been called!!")};

for(var funcProp in myObjectifiedFunction){
    if(myObjectifiedFunction.hasOwnProperty(funcProp)){
        console.log("my objectified function has property - " + funcProp + " -  with value - " + myObjectifiedFunction[funcProp]);
    }
}

//THE NAME PROPERTY : every named function has a name property : even the named function declarations

function myNamedFunc1(){

}

var myNoNameFunc1=function(){

};

var myNamedFunc2=function func2Name(){

};

console.log("myNamedFunc1 name property is " + myNamedFunc1.name );

console.log("myNamedFunc2 name property is " + myNamedFunc2.name );

console.log("myNoNameFunc1 name property is " + myNoNameFunc1.name );
