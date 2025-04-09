console.log("hey this is javascript");

var a = 5;
var b = 6;
var c = "jatin arya";
console.log(a + b + 8);
console.log(typeof a, typeof b, typeof c);

// const a1=5;
// a1=a1+1; 
//assignments to constant variables not allowed;

let x = "jatin arya";
let y = 5;
let z = 3.66;
const p = true;
let q = null;
let r = undefined;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r); //string number number boolean object undefined

let o = { job_code: 4566, job_title: "developer", job_location: "delhi", is_handsome: true };   //object    

console.log(o);

o.salary = "5LPA";
console.log(o);
o.salary = "6 crore";
console.log(o);


// loops in js
a = 1;
for (let i = 0; i < 100; i++) {
    console.log(i + a);
}//  prints 1 to 100


// for  loop in javascript
let obj = { name: "jatin", age: 21, city: "delhi" };
for (const key in obj) {
    console.log(key);
}

for (const c of "jatin") {
    console.log(c);
}


// while loop in javascript

i=5;
while(i<6){
    console.log(i);
    i++;
} // prints 5


// do while loop in javascript
i=0;
do{
    console.log(i);
    i++;} while(i<6); // prints 5   



// functions in javascript
function nice(name) {
    console.log("his name is " + name+" he is good person.")
    console.log("what type of work you do ", name, "and where are you from", name)
    console.log("my name is not ", name, " i am from bihar");

}
nice("jatin");

// function addition
function sum(a, b, c=3) {
    return a + b+c;
}
result1=sum(5,6);
result2=sum(22,6);
result3=sum(13,6);
console.log("the sum of numbers are:",result1);
console.log("the sum of numbers are:",result2);
console.log("the sum of numbers are:",result3);


// arrow function in javascript   
const multiply = (a, b) => {
     return a * b;

}
console.log(multiply(5,6));
console.log(multiply(5,20));
console.log(multiply(5,10));