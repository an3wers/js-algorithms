const array = [4, 5, 7, 10, 3]

function sum(arr) {

    let res = 0

    if (arr.length == 1) {
        return arr[0]
    } else {

        res = arr.pop()

        return res + sum(arr)
    }
}

console.log(sum(array))