function addTwo(num: number){

    return num +2;
}

//* comment 

function getUpper(val: string){
    return val.toUpperCase();
}


function signUpUser(name: string, email: string, isPaid: boolean){
}


let loginUser = (name: string, email: string, isPaid: boolean = false) => {
}


// function getValue(myVal: number): boolean{

//     if(myVal>5){
//         return true;
//     }
//     return "200 Ok"
// }


const getHello = (s: string): string => {

    return "";
}

const heros = ["thor", "ironman", "spiderman"];

function consoleError(errMsg: string): void{
    console.log(errMsg);
}

function handleError(errMsg: string){
    throw new Error(errMsg);
}


loginUser("x", "x@x.com");
signUpUser("hey","hey@test.com",false);
addTwo(5);
getUpper("test");

