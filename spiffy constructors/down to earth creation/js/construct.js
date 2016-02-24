/**
 * Created by sumeet on 24-02-2016.
 */


function MyFirstBorkySingingConstructor(val){
    this.singer=val;
}

var borkyObject=MyFirstBorkySingingConstructor("John Lennon");

if(undefined===borkyObject){
    console.log("you missed the new keyword! borkyobject is undefined!! checking the window");
    if(undefined!==window.singer){
        console.log("darn, you assigned singer " + window.singer + " to the global window!");
    }
}


/*Using object constructor to create an object*/

var myNumberObject = new Object(1);
myNumberObject.constructor==Number?console.log("Number constructor was called to create myNumberObject by object constructor"):console.log("meh,filler");

var myStringObject = new Object("Ah ah ah ah staying alive");
myStringObject.constructor==String?console.log("String constructor was called to create myStringObject by object constructor"):console.log("meh,filler");

var myBooleanObject = new Object(true);
myBooleanObject.constructor==Boolean?console.log("Boolean constructor was called to create myBooleanObject by object constructor"):console.log("meh,filler");

/* using new */

function myFirstNonBorkyMumConstructor(val){
    this.MumKeeper=val;
}

/*Can you create a an empty object, assign it to this, and return it, constructor function?
Why not, assuming you are unaware that this will inherit properties from the prototype,it will seem empty to you, just place new before me*/
myFirstNonBorkyMumKeeper = new  myFirstNonBorkyMumConstructor("A very serious programmer");

console.log(myFirstNonBorkyMumKeeper.MumKeeper + " is silently coding!");

/*Prototype? Yeah, you mean inheritance ?
Duh, javascript, object inherit from other objects, the parent is prototype, father of all objects is the object Object
That's too much of object object, can't handle it !
 */
function MyChild(name){
    this.name=name;
}


function MyParent(name){
    this.parentName=name;
}

var aParent=new MyParent("Papa");

/*This is of the form, prototype = AN OBJECT of the parent, and NOT THE PARENT CONSTRUCTOR, so object inherit from objects
 but technically MyParent is also an object, since functions are first class objects in javascript,
 well,well, you caught me there, but you wouldn't want to inherit from constructor, would you? makes no sense. */
MyChild.prototype=aParent;

var aChild=new MyChild("good child"),
    anotherChild=new MyChild("heinous child");
/**
 * I have created brothers. But beware, if parent has a property which exists on the child object
 */
console.log(aChild.name +"'s parent is " + aChild.parentName);
console.log(anotherChild.name + "'s parent is " + anotherChild.parentName);


