let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4]

const FE = (arr) => {
    return arr.forEach(i => arr.push(i = i*10))
}

const M = (arr) => {
    return arr.map(i => i = i*10)
}

let arr3 = FE(arr1)
let arr4 = M(arr2)

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)