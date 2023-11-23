// 1. Write a code which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F
function grade(score) {
    if (score >= 80 && score <= 100) {
        return 'A'
    } else if (score >= 70 && score <= 89) {
        return 'B'
    } else if (score >= 60 && score <= 69) {
        return 'C'
    } else if (score >= 50 && score <= 59) {
        return 'D'
    } else if (score >= 0 && score <= 49) {
        return 'F'
    }
}

console.log('1:')
console.log(grade(88))

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer
function season(month) {
    if (month === 'September' || month === 'October' || month === 'November') {
        return 'Autumn'
    } else if (month === 'December' || month === 'January' || month === 'February') {
        return 'Winter'
    } else if (month === 'March' || month === 'April' || month === 'May') {
        return 'Spring'
    } else if (month === 'June' || month === 'July' || month === 'August') {
        return 'Summer'
    }
}

console.log('2:')
console.log(season('September'))

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
function day(day) {
    if (day === 'Saturday' || day === 'Sunday') {
        return 'weekend'
    } else {
        return 'working day'
    }
}

console.log('3:')
console.log(day('Friday'))
