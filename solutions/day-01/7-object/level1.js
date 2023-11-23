// 1. Create an empty object called dog
let dog = {}

// 2. Print the the dog object on the console
console.log('2:')
console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object.
// The bark property is a method which return woof woof
dog.name = 'xiaohei'
dog.legs = 4
dog.color = 'yellow'
dog.age = 3
dog.bark = function () {
    return 'woof woof'
}

// 4. Get name, legs, color, age and bark value from the dog object
console.log('4:')
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'Golden Retriever'
dog.getDogInfo = function () {
    return `${this.name} is a ${this.breed} with ${this.color} color.`
}
