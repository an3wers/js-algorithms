// Сортировка выбором

const array = [5, 3, 6, 2, 10]

// Поиск наименьшего значения

function findSmallest(arr) {

    let smallest = arr[0]
    let smallestIndex = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

// Сортировка

function selectionSort(arr) {
    const sortArr = []
    const l = arr.length
    for (let i = 0; i < l; i++) {
        let smallestIndex = findSmallest(arr)
        const tmp = arr.splice(smallestIndex, 1)
        sortArr.push(tmp[0])
    }
    return sortArr
}

console.log(selectionSort(array))
