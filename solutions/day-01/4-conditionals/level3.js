// 1. Write a program which tells the number of days in a month.
function daysInMonth(month) {
    const daysMap = {
        'January': 31,
        'February': 28,
        'March': 31,
        'April': 30,
        'May': 31,
        'Jun': 30,
        'July': 31,
        'August': 31,
        'September': 30,
        'October': 31,
        'November': 30,
        'December': 31
    }
    return daysMap[month]
}

console.log('1:')
console.log(daysInMonth('February'))
