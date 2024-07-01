/* (=) Assignment Operator::
1. = represents to assignment operator 
2. use to  assign values to a variables
*/
let x = 5; 
console.log(x); // Assigns the value 5 to the variable x



/* (==) Equality Operator::
1. == represents to equality operator 
2. it compares the value on both sides (left & right) and return true if they are equal
3. it checks for value equality but ignores the type.
*/
let a = 5;
let b = "5";
console.log(a == b); // true, because the string "5" is converted to the number 5 before comparison




/* (===) Strict Equality Operator::
1. === represents to strict equality operator
2. it compares the values on both sides (left & right) along with their data types 
   and return true if they are equal
3. It ensures that both the value and the type are the same.
*/
let c = 5;
let d = "5";
console.log(c === d); // false, because the types (number and string) are different
