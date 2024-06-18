let n1 = 0;
let n2 = 1;
let nextVal;


function fibonacci(number) {
    for (let i = 1; i < number; i++) {
        console.log(n1);
        nextVal = n1 + n2;
        n1 = n2;
        n2 = nextVal;
    }
}


fibonacci(10);
