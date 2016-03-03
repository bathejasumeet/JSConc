/**
 * Created by sumeet on 27-02-2016.
 */
/*let's try and see what happens when you try to return values from constructors -- try to act smart */


function SpoofConstructor(name){
    this.name="I am " + name;
    return {name:"I am Deadpool"};
}


var myObj = new SpoofConstructor("Batman");

console.log("and the winner is " + myObj.name);

function SpoofConstructorRetake(name){
    this.name="I am "+ name;
    return "I am DeadPool";
}


var myObjRetake = new SpoofConstructorRetake();


console.log("retake winner is " + myObjRetake.name + " ,deadpool, you trying to act smart, try masquerading as non-object, and I shall destroy you!!!");

