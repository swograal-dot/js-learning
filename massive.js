// Массивы

const people = [
  { name: 'Владилен', age: 25, budget: 40000 },
  { name: 'Елена', age: 17, budget: 3400 },
  { name: 'Игорь', age: 49, budget: 50000 },
  { name: 'Михаил', age: 15, budget: 1800 },
  { name: 'Василиса', age: 24, budget: 25000 },
  { name: 'Виктория', age: 38, budget: 2300 }
]

// map

// const num = [1, 2, 3, 4, 5]
// const square = num.map(num => num ** 2)
// console.log(square)


// const info = people.map(person => {
//     return `${person.name}, ${person.age}`
// })
// console.log(info)


// filter


// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })
// console.log(adults)


// const rich = people.filter(person => {
//     if (person.budget > 10000) {
//         return true
//     }
// })
// console.log(rich)


// reduce


// const amount = people.reduce((total, person) => {
//     return total + person.budget
// }, 0)
// console.log(amount)