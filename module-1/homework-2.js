// #1
// const sayHello = () => {
//     console.log("Hello from Node.js!")
// }
// sayHello()

// #2
// const welcomeUser = (name) => {
//     console.log("Welcome " + name + "!")
// }

// welcomeUser("Louise")
// welcomeUser("Telma")

// #3
// const substract = (a, b) => {
//     console.log(a - b)
// }

// substract(10, 3)

// #4
// function square (number) {
//     const product = number  * number
//     return product
// }

// result = square(5)
// console.log(result)

// #5
// const profile = (name, age, likesCoding) => {
//     return "Hi! I'm " + name + ", I am " + age + ", and it is " + likesCoding + " that I like coding!"
// }

// console.log(profile("Lo", 36, true))

// #6
// const greetWithTime = (name, timeOfDay) => {
//     return "Good " + timeOfDay + ", " + name + "!"
// }

// console.log(greetWithTime("Onis", "morning"))
// console.log(greetWithTime("Onis"))

// #7
// const calculator = (a, b, operator) => {

//     if (operator === "add") {
//         return (a + b)
//     } else if (operator === "subtract") {
//         return (a - b)
//     } else if (operator === "multiply") {
//         return (a * b)
//     } else if (operator === "divide")
//         return (a / b)
//     }

//     console.log(calculator(5, 10, "add"))
//     console.log(calculator(6, 4, "subtract"))
//     console.log(calculator(2, 3, "multiply"))
//     console.log(calculator(10, 2, "divide"))

// #8
// const square = (number) => {
//     const product = number  * number
//     return product
// }

// result = square(8)
// console.log(result)

// #9
const isAdult = (age) => {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

const profile = (name, age, likesCoding) => {
    if (isAdult(age)) {
        return "Hi! I'm " + name + ", I am an adult of " + age + " years old, and it is " + likesCoding + " that I like coding!"
    } else {
        return "Hi! I'm " + name + ". I am not yet an adult, I am " + age + " years old, and it is " + likesCoding + " that I like coding!"
    }
}
console.log(profile("Onis", 15, true))
console.log(profile("Lo", 36, true))
