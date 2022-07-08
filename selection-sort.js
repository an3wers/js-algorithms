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
// Не работает!!

function selectionSort(arr) {
    const sortArr = []
    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = findSmallest(arr)
        console.log(smallestIndex)
        sortArr.push(arr.pop(smallestIndex))
    }

    return sortArr
}

console.log(selectionSort(array))