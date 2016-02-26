/**
 * Created by sumeet on 27-02-2016.
 */
var myArray=["22","23","12345","4","123"];
console.log(typeof parseInt("12345",10));

var res=myArray.sort(function(a,b){
    return parseInt(a,10) - parseInt(b,10);
});

console.log("sorted elements are " + res.join(" "));