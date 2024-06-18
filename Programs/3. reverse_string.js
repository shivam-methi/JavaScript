//with pre-defined function

// function reverseString(str) {
//     var splitString = str.split(""); 
//     var reverseArray = splitString.reverse(); 
//     var joinArray = reverseArray.join(""); 

//     return joinArray; 
// }

//without pre-defined function

function reverseString(str) {

    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
        // console.log(str[i]);
    }
    return reversed;
}

let reversedString = reverseString("I am learning javascript");
console.log(reversedString);