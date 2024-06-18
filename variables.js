/*Var
1. tradational way to declare variable in javascript
2. Var has function or global scope 
3. var can be redeclared and reassigned

*/


var z = 30;

function varTest() {

    var x = 10;
    if (true) {
        console.log(z);
        console.log(x);

        var y = 20;
    }

    console.log(y);

}

varTest();

/*let
1. let was introduced in ES6
2. let has block scope 
3. let can't be redeclared but can be reassigned


*/

function letTest() {

    let x = 10;
    if (true) {
        console.log(x);

        let y = 20;
    }
    console.log(y);


}

letTest();


/*const
1. const was introduced in ES6
2. const has block scope 
3. const can't be redeclared and reassigned

*/

function constTest() {

    const x = 10;
    if (true) {
        console.log(x);

        const y = 20;
    }
    console.log(y);


}

constTest();