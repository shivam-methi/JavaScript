//bubble sort

function sortArray(arr) {

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }

}

let arr = [40, 30, 22, 34];
sortArray(arr);
console.log(arr);