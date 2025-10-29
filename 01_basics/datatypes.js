const a=12;                       // const value cannot be changed.
let b=123;                        // preferable in jS to use 'let' .
var c=1;                          // Due to scope issues '{}' use of var is not preferable. Never use it. 

// a=21;                          // u will get error bcz u can't change the value of const.

console.log(a);                  // to check the value of any variable individually.
console.table([a,,b,c]);         // to check the value of multiple variables in a console.

// CONCEPT OF PRIMITIVE AND NON-PRIMITIVE.

// Primitive
let d=27;
let e=d;
e=28;                    // Hence changing the value 'e' does not effect the value of 'd', that is premitive. 

console.log(e);

// Non-Primitive
let obj1={name: "umair", age: 22};
let obj2=obj1;

obj2.age=21;            // Hence changing the value of "obj2" is also effecting the value of "obj1" that is non-primitive.

console.log(obj2);