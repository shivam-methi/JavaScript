function swap() {

    let a = 2;
    let b = 3;

    console.log("Before Swap");
    console.log("value of a:", a);
    console.log("value of b:", b);

    a = a + b;
    b = a - b;
    a = a - b;


    console.log("After Swap");
    console.log("value of a:", a);
    console.log("value of b:", b);
}

swap();
