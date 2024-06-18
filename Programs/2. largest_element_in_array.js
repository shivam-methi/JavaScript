function largest(arr){

    let largest = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}

const arr = [11,88,34,54,67,88];
const largestElement = largest(arr);
console.log(largestElement);