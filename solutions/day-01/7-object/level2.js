const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// 1. Find the person who has many skills in the users object.
let manySkillsUser = users.Alex
for (const user of users) {
    if (user.skills.length > manySkillsUser.skills.length) {
        manySkillsUser = user
    }
}
console.log('1:')
console.log(manySkillsUser)

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0
let greaterThan50PointsUsers = 0
for (const user of users) {
    if (user.isLoggedIn) {
        loggedInUsers++
    }
    if (user.points >= 50) {
        greaterThan50PointsUsers++
    }
}
console.log('2:')
console.log(loggedInUsers)
console.log(greaterThan50PointsUsers)

// 3. Find people who are MERN stack developer from the users object
let mernStackUsers = []
for (const user of users) {
    if (user.skills.includes('MongoDB') && user.skills.includes('Express')
        && user.skills.includes('React') && user.skills.includes('Node')) {
        mernStackUsers.push(user)
    }
}
console.log('3:')
console.log(mernStackUsers)

// 4. Set your name in the users object without modifying the original users object
users.Bo = {
    email: 'bo@example.com',
    skills: ['Python', 'Javascript', 'Rust', 'Golang'],
    age: 30,
    isLoggedIn: true,
    points: 100
}

// 5. Get all keys or properties of users object
console.log('5:')
console.log(Object.keys(users))

// 6. Get all the values of users object
console.log('6:')
console.log(Object.values(users))

// 7. Use the countries object to print a country name, capital, populations and languages.
