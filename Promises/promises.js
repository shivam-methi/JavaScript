/*
Promises:
1. Promises basically represents upcoming complition or failure of an asynchronous event and it's resulting value
2. Ex: Order item from Amazon 
3. States - Resolve, Reject, Pending
4. Keyword - Promise 

*/

/*
console.log('Start');

// Promise Explanation:

const order = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = true;
        if (result) resolve('Your Amazon Order is delivered successfully');
        else reject(new Error('Your Amazon Order is cancelled'));
    }, 2000);
});

order.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

console.log('End');
*/

//Change Callback to Promises

//Function Creation

console.log('Start');

function first(type) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is first ${type}`)
        }, 1000);
    });
}

function second(method) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`this is second ${method}`)
        }, 1000);
    });
}

function third(method) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is third ${method}`)
        }, 1000);
    });
}

function fourth(method) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is fourth ${method}`)
        }, 1000);
    });
}

//Calling Function

//Promise Hell
/*
first('Async Function').then((res) => {
    console.log(res);   
    second('Async Method').then((res) => {
        console.log(res);
        third('Async Method').then((res) => {
            console.log(res);
            fourth('Async Method').then((res) => {
                console.log(res);
            })
        })
    })
}).catch((err) => {
    console.log(err);
})
*/

//Promise Chaining
/*
first('Async Function').then((res) => {
    console.log(res);
    return second('Async Method');
}).then((res) => {
    console.log(res);
    return third('Async Method');
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
*/

//Promise Combinator
//Helps to execute more than one promise at one time that return the result accordingly
//types:
//Promise.all() - run all the promises in parallel and return array with all fulfilled promises, if one get failed it will be completely failed

Promise.all([
    first('Async Function'),
    second('Async Method'),
    third('Async Method')
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log('err', err);
})

console.log('End');

