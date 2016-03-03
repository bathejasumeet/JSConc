/**
 * Created by sumeet on 01-03-2016.
 */

/*this is how you check for arrayness in es5 */
console.log(Object.prototype.toString.call([1])=="[object Array]"?"congratulations you nailed it":"duh! check the condition");

/*this is how you don't do it*/
console.log([1].toString()=="[object Array]"?"congratulations you nailed it":"duh! check the condition");


/*array forEach, beware, it returns nothing,and the callback returns nothing */
var myForEachArray=["first","second","third"];

myForEachArray.forEach(function(ele,index,arr){
   console.log("element " + index + " inside forEach " + ele);
    return ele + " element";
});

console.log("forEachArray is " + myForEachArray.toString());

/*array Map, it returns the mapped array, and the callback returns the mapped element*/
var myMapArray=["first","second","third"];
myMapArray=myMapArray.map(function(ele,index,arr){
    return index;
});

console.log("myMapArray is " + myMapArray);