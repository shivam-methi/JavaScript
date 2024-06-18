function search(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return i;
        }
    }
    return false;
}


const arr = [1, 2, 3, 4, 5];
const ele = 2;

const result = search(arr, ele);

if (result !== false) {
    console.log(`Element ${ele} found at index ${result}.`);
} else {
    console.log(`Element ${ele} not found in the array.`);
}