//What is the result? why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?

//Result of arr[2]() will be "this" 
//becouse arr.push adds function "this" to the end setting it as 2
