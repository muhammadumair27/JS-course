// "Premittive" type... Premittive mn apa ko value ki copy mil jaati hyn memory se utha ka, original reference nhi... that's the reason k aap jahan bhi change krein value uss variable ki woh jus wahin hi change hota hy baaqi jagah original hi rehta hy.
// There are Seven types of Premittive ... string, number,null, undefined,BigInt, Boolean, Symbol



// "Non Premittive" type... Non premittive mn aap ko poora hi us value ka reference hi mil jata hy, jahan bhi change krogy hr jagah se ho jai ga.
// just Three types khoty hyn.... Array, object and Function.

// yes Js is Dynamically typed language... u dont need to defined the type of any variable, Js itself on run time decides the type od variable.

const score=100

let loggedIn=true
                                // in sbb cases mn datatype khud detect kr leta hy Js.
let new_score;      // yahan value undefined hy mtlb k value abhi aani hy

let temp=null;     // yahan value Null hy mtlb empty hy... zero nhi kahein gy bcz zero khud aik value hy

// Symbols... used to make components unique in projects

let id=Symbol('123')
let new_id=Symbol('123')

console.log(id===new_id);       // this is False bcz symbols mn beshk values same bhi hon to be jb tk id same nhi hogi True nhi hota...

// *** IMPORTANT *** NULL KI TYPEOF OBJ HOTI HY.