/*
1. closure is created when an inner function has access to the outer function's variables
2. even after the outer function has finished executing
*/

function outerFunction() {
    let outerVariable = 'I am from outerFunction';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: "I am from outerFunction"
