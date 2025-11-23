const a=12;                       // const value cannot be changed.
let b=123;                        // preferable in jS to use 'let' .
var c=1;                          // Due to scope issues '{}' use of var is not preferable. Never use it. 

// a=21;                          // u will get error bcz u can't change the value of const.

console.log(a);                  // to check the value of any variable individually.
console.table([a,b,c]);         // to check the value of multiple variables in a console.

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



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// THERE ARE TWO TYPES OF MEMORIES USED IN JS

// 1_ Stack (Primitive) Value Not Change [Value as a copy milti hy aap ko aap kissi ko bhi assign kr k change bhi kr do aap ki original value same rahy gi]
// 2_ Heap (Non-Primitive) Value Change [Is mn ap ko copy nhi blky reference mil jata hy, agr aap ne change kahin pr bhi kiya to woh hr jagah se change ho jati hy]


//Example of Stack (Primitive)
let a1=22;
let u1=a1;
u1=21;

console.log(a1);
console.log(u1);

//Example of Heap (Non-Primitive)
let userOne={
    name:"umej",
    relat:"hw"
}

let userTwo=userOne;
userTwo.name="saf";

console.log(userOne);
console.log(userTwo);

