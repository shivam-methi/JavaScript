/*
Steps:
1. Initialize empty variables to store the result
2. Initialize varaible to store the Set() method
3. Loop Through Each Character in string
4. If condition to check for Duplicate Characters
5. Add Unique Characters to Result & Set variables
6. return the result
*/


function removeDuplicates(str) {

    let result = '';
    let seen = new Set();               // Set is a collection of unique values

    for (i = 0; i < str.length; i++) {
        if (!seen.has(str[i])) {
            result += str[i];
            seen.add(str[i]);          // to add values in set()
        }
    }

    return result;

}

inputString = 'programming';
outputString = removeDuplicates(inputString);

console.log('original string:', inputString);
console.log('string after removing duplicates:', outputString);


// Expected Result: progamin
