//Synchronous vs Asynchronous code

/*
1. Js exectues sync code first and then async code


Callback:
1. When we pass a function in another fuction as function argument or parameter 
2. Nesting of callback functions are call/create callback hell
3. Hard to read & understand the code 
4. Solution is - Promises

*/


//Sync code
// console.log('Start');
// console.log('Sync code');
// console.log('End');


//Async code
console.log('Start');

//Function Creation
function first(type, callback) {
    setTimeout(() => {
        callback(`this is first ${type}`)
    }, 1000);
}

function second(method, callback) {
    setTimeout(() => {
        callback(`this is second ${method}`)
    }, 1000);
}

function third(method, callback) {
    setTimeout(() => {
        callback(`this is third ${method}`)
    }, 1000);
}

function fourth(method, callback) {
    setTimeout(() => {
        callback(`this is fourth ${method}`)
    }, 1000);
}

//Function call
first('Async function', function (functionType) {
    console.log(functionType);
    second('Async method', methodType => {
        console.log(methodType);
        third('Async method', methodType => {   
            console.log(methodType);
            fourth('Async method', methodType => {
                console.log(methodType);
            });
        });
    });
});


console.log('End');