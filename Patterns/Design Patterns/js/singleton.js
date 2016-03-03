/**
 * Created by sumeet on 04-03-2016.
 */

/* There is no reason for singleton pattern to be implemented  in this way in javascript, since there is no need of constructors to create an object:
   You can simply create an object literal and live with it, considering it a singleton
   THIS IS AN OVERKILL : I REPEAT , THIS IS AN OVERKILL
 */

function MySingletonConstructor(){
    /* it is highly important to use this : don't use any arbitrary object, you might end up breaking inheritance if you don't use this :
    since a constructor:
    a.creates this
    b.inherits it from prototype
    c.implicitly returns is*/
    var singletonObj=this;

    this.prop1="yo";
    this.prop2="mama!";

    /*private static member pattern : self-defining function */
    MySingletonConstructor=function(){
        return singletonObj;
    }
}

var mySingletonInstance1=new MySingletonConstructor();
var mySingletonInstance2=new MySingletonConstructor();
console.log("mySingletonInstance1.prop1 = " + mySingletonInstance1.prop1 + " , mySingletonInstance1.prop2 =" + mySingletonInstance1.prop2);

console.log("mySingletonInstance2.prop1 = " + mySingletonInstance2.prop1 + " , mySingletonInstance2.prop2 =" + mySingletonInstance2.prop2);

