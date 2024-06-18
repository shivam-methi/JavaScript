let arr = [554, 4, 65, 77];


//Array map method
// let map = arr.map((value, index, array) => {
// console.log(value, index, array);
// return value + 1;
// })

// console.log(map);


//Array filter method
// let filter = arr.filter((value) => {
//     return value<10;
// })

// console.log(filter);


let reduce = arr.reduce((value1, value2) => {
    return value1 + value2;
})

console.log(reduce);