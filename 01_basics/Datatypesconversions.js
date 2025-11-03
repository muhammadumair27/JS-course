// first of all there are basic comparisons in Js as normal

// console.log(2==1);
// console.log(2!=3);
// console.log(2>=1);      // we know that k inn ki outputs kya aain gi bcz its very simple and basic.
// console.log(2<=2);
// console.log(2>1);

// ***** NOW COMPARIONS BETWEEN DIFFERENT DATATYPES *****

console.log(1==2);
console.log("1">1);     // *** IMPORTANT*** Here the imp thing is that in JS whenever it checks the all types of comparison ( <, >, >=, <=,!= ) the JS automatically convert the other side's datatype into a Number type...
console.log(2=="2");

// **** == **** POSSIBLE CASES

console.log("2"==2);   // as usual the oneside is automaticaaly JS converted into a number
console.log(null==0);  // *** IMPORTANT *** but here is null with double equals (==) is always converted into (undefined) means having no value...
console.log(null>=0);  // but here as usual the normal case the null is converted into a number type and into (ZERO) 