/*
Function Overloading: two or more functions can have the same name but different parameters
Function name should be the same and the arguments should be different.
JavaScript Does not support Function Overloading.

Typescript provides the concept of function overloading
you can have multiple functions with the same name but different paramenter types & return types
However, the number of parameter should be same
*/

//provide the implementation/prototype of the function:
function sum(a:string, b:string):string;
function sum(a:number, b:number):number;
function sum(a:boolean, b:boolean):boolean;


//need to implement with function body this only once:
function sum(a:any, b:any): any{
    return a+b;
}

let s1 = sum('hello','world');
console.log(s1);

let s2 = sum(10,20);
console.log(s2);

let s3 = sum(true,false);
console.log(s3);
