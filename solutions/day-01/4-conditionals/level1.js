// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older ,
// give feedback:'You are old enough to drive' but if not 18 give another feedback stating to
// wait for the number of years he needs to turn 18.
function canDrive(age) {
    if (age >= 18) {
        return 'You are old enough to drive.'
    } else {
        let year = 18 - age
        return `You are left with ${year} years to drive.`
    }
}

let age = parseInt(prompt("Enter your age:"))
console.log(canDrive(age))

// 2. Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you).
// Use prompt(“Enter your age:”) to get the age as input.
function older(age1, age2) {
    if (age1 > age2) {
        return `I am ${age1 - age2} years older than you.`
    } else if (age1 < age2) {
        return `You are ${age2 - age1} years older than me.`
    } else {
        return 'We are the same age.'
    }
}

let myAge = 29
let yourAge = parseInt(prompt("Enter your age:"))
console.log(older(myAge, yourAge))

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'.
// Try to implement it in two ways
function greater1(a, b) {
    if (a > b) {
        return 'a is greater than b'
    } else {
        return 'a is less than b'
    }
}

function greater2(a, b) {
    switch (true) {
        case a > b:
            return 'a is greater than b'
        default:
            return 'a is less than b'
    }
}

console.log(greater1(4, 3))
console.log(greater2(4, 3))

// 4. Even numbers are divisible by 2 and the remainder is zero.
// How do you check, if a number is even or not using JavaScript?

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even`
    } else {
        return `${number} is odd`
    }
}

console.log(evenOrOdd(4))

