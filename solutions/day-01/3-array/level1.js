const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]


// 1. Declare an empty array;
const emptyArray = []

// 2. Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 6, 7]

// 3. Find the length of your array
console.log('3:')
console.log(numbers.length)

// 4. Get the first item, the middle item and the last item of the array
console.log('4:')
console.log(numbers[0], numbers[Math.floor(numbers.length / 2)], numbers[numbers.length - 1])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['a', 1, true, [1], 66, 'detail']

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()
console.log('7:')
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log('8:')
console.log(itCompanies.length)

// 9. Print the first company, middle and last company
console.log('9:')
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])

// 10. Print out each company
console.log('10:')
console.log(itCompanies)

// 11. Change each company name to uppercase one by one and print them out
console.log('11:')
console.log(itCompanies.map((s) => {
    return s.toLocaleUpperCase()
}))

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log('12:')
console.log(itCompanies.slice(0, itCompanies.length - 1).toString() + ' and ' + itCompanies[itCompanies.length - 1] + ' are big IT companies.')

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log('13:')
const index = itCompanies.indexOf('Facebook')
if (index !== -1) {
    console.log(itCompanies[index])
} else {
    console.log('not found')
}

// 14. Filter out companies which have more than one 'o' without the filter method
const o_more_than_once = []
for (const itCompany of itCompanies) {
    let num_o = 0
    for (const c of itCompany) {
        if (c === 'o') {
            num_o++
        }
        if (num_o === 2) {
            o_more_than_once.push(itCompany)
            break
        }
    }
}
console.log('14:')
console.log('o more than once: ', o_more_than_once)

// 15. Sort the array using sort() method
itCompanies.sort()
console.log('15:')
console.log(itCompanies)

// 16. Reverse the array using reverse() method
itCompanies.reverse()
console.log('16:')
console.log(itCompanies)

// 17. Slice out the first 3 companies from the array
console.log('17:')
console.log(itCompanies.slice(0, 3))

// 18. Slice out the last 3 companies from the array
console.log('18:')
console.log(itCompanies.slice(itCompanies.length - 3))

// 19. Slice out the middle IT company or companies from the array
const start = Math.floor(itCompanies.length / 2)
let end
if (itCompanies.length % 2 === 0) {
    end = start + 2
} else {
    end = start + 1
}
console.log('19:')
console.log(itCompanies.slice(start, end))

// 20. Remove the first IT company from the array
itCompanies.shift()
console.log('20:')
console.log(itCompanies)

// 21. Remove the middle IT company or companies from the array
const begin = itCompanies.length % 2 === 0 ? itCompanies.length / 2 - 1 : Math.floor(itCompanies.length / 2)
const num = itCompanies.length % 2 === 0 ? 2 : 1
itCompanies.splice(begin, num)
console.log('21:')
console.log(itCompanies)

// 22. Remove the last IT company from the array
itCompanies.pop()
console.log('22:')
console.log(itCompanies)

// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length)
console.log('23:')
console.log(itCompanies)
