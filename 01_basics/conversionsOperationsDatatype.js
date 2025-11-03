let number="33";            // variable is in string type

// console.log(number);
// console.log(typeof number);

let StringintoNumber=Number(number);       // Converted into Number type
// console.log(typeof StringintoNumber);


let IsLoggedIn=true                  // value is in boolean type

// console.log(IsLoggedIn);

let numbereanIsLoggenIn=Number(IsLoggedIn);        // converted into Number type
// console.log(typeof numbereanIsLoggenIn);


// THERE ARE SOME CONFUSING CONVERSIONS ALSO SO U HAVE TO BE AWARE

let number1="33abc"        // here value type is String

// console.log(number1);

// console.log(typeof number1);

let number1IntoNumber=Number(number1);        // here we convert it into a Number type 
// console.log(typeof number1IntoNumber);
// console.log(number1IntoNumber);              // but when we console it after conversion it will pass NaN which means (Not a Number)


// console.log(typeof null);                 // null => object
// console.log(typeof undefined);            // UNDEFINED => UNDEFINED
// console.log(typeof true);                 // true => boolean



// ********** SECOND VIDEO OF CONVERSIONS **********

let a=2;
let b=3;

// Arithmatic operators

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
//  console.log(a**b);
// console.log(a%b);

// Precedence 
 // jis cheez se start hoga operation aagy sbb values ko bhi wese hi deal kiya jai ga...
console.log("1"+2);      // starting with string so it will be deal with string type ==> 12 
console.log("1"+2+2);    // same as above ==> 122
console.log(2+2+"1");    // starting with number type so rest of all will be deal with number type ==> 41


let score=122;
// score++;
++score;                               // yahan in doo cases mn to ++ aagy ya peechy lgaany se koi farq nhi pra but inn ki bhi value hoti hy ..... YA concept introduce hota hy Prefix and Postfix

console.log(score);

// let a=true;
console.log(+true);                    // output is ==> 1

// ***** Prefix Example *****

//First increment or decrement than used...

let a1=5;
let b1=++a;

console.log()




