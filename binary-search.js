function binarySerch(arr, num) {
    let end = arr.length - 1
    let start = 0
    let mid = 0

    const sorted = arr.sort(function (a, b) { return a - b })

    while (start <= end) {
        // search middle in array
        mid = Math.floor((end + start) / 2)

        if (sorted[mid] === num) {
            return sorted[mid]
        } else if (num > sorted[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return 'Not found'

}

let array = [80, 74, 50, 38, 15, 67, 99, 32, 8]

const test = binarySerch(array, 50)

console.log(test)