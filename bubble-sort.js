const array = [3, 7, 2, 9, 10, -7, 50, 0, -1]

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j+1] < arr[j]) {
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}

console.log(bubbleSort(array))