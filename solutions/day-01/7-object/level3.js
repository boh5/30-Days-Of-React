// 1. Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties
// and it has totalIncome, totalExpense, accountInfo,addIncome,
// addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses
// is a set of incomes and its description.
const personAccount = {
    firstName: 'bo',
    lastName: 'h',
    incomes: [6500, 1000, 20],
    expenses: [3000, 400],
    totalIncome: () => this.incomes.reduce((acc, cur) => acc + cur, 0),
    totalExpense: () => this.expenses.reduce((acc, cur) => acc + cur, 0),
    accountInfo: () => `${this.firstName} ${this.lastName}`,
    addIncome: function (num) {
        this.incomes.push(num)
    },
    addExpense: function (num) {
        this.expenses.push(num)
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense()
    }
}

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            {userId: 'fg12cy', rate: 5},
            {userId: 'zwf8md', rate: 4.5},
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{userId: 'fg12cy', rate: 5}],
        likes: ['fg12cy'],
    },
]

// 2. Imagine you are getting the above users collection from a MongoDB database.
//   a. Create a function called signUp which allows user to add to the collection.
//      If user exists, inform the user that he has already an account.
function randString(length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

function signUp(username, email, password) {
    for (const user of users) {
        if (email === user.email) {
            return 'email has already signed up'
        }
    }
    const date = new Date()
    users.push({
        _id: randString(6),
        username: username,
        email: email,
        password: password,
        createdAt: date.toISOString(),
        isLoggedIn: false,
    })
}

//   b. Create a function called signIn which allows user to sign in to the application
function signIn(email, password) {
    for (const user of users) {
        if (email === user.email && password === user.password) {
            user.isLoggedIn = true
            return
        }
    }
    return 'wrong email or password'
}

// 3. The products array has three elements and each of them has six properties.
//   a. Create a function called rateProduct which rates the product
function rateProduct() {
    function getRate(product) {
        let rate = 0
        for (const r of product.ratings) {
            rate += r.rate
        }
        return rate
    }

    const ratedProducts = []
    for (const product of products) {
        if (ratedProducts.length === 0) {
            ratedProducts.push(product)
            continue
        }

        const curRate = getRate(product)

        let i = 0
        while (i < ratedProducts.length) {
            if (i === ratedProducts.length - 1) {
                ratedProducts.push(product)
                break
            }
            if (getRate(ratedProducts[i]) >= curRate && curRate >= getRate(ratedProducts[i + 1])) {
                ratedProducts.splice(i + 1, 0, product)
                break
            }
            i += 1
        }
    }

    return ratedProducts
}

console.log('3:')
console.log(rateProduct())

//   b. Create a function called averageRating which calculate the average rating of a product
function averageRating() {
    let totalRating = 0
    for (const product of products) {
        for (const rate of product.ratings) {
            totalRating += rate.rate
        }
    }
    return totalRating / products.length
}

// 4. Create a function called likeProduct.
// This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId, toRate) {
    let product = null
    for (const p of products) {
        if (productId === p._id) {
            product = p
        }
    }

    if (product === null) {
        return 'product not found'
    }

    for (let i = 0; i < product.ratings.length; i++) {
        if (product.ratings[i].userId === userId) {
            product.ratings.splice(i, 1)
            return
        }
    }
    product.ratings.push({
        userId: userId,
        rate: toRate
    })
}
