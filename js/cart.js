const cart = document.querySelectorAll('button')

let product = [
    {
        name: 'Fried Squid',
        tag: 'friedquid',
        price: '12',
        incart: '0'
    },
    {
        name: 'Spring rolls',
        tag: 'springroll',
        price: '15',
        incart: '1'
    },
    {
        name: 'Papaya',
        tag: 'papayasalade',
        price: '12',
        incart: '2'
    },
    {
        name: 'Clams',
        tag: 'clams',
        price: '13',
        incart: '3'
    },
    {
        name: 'Fried Squid',
        tag: 'friedquid',
        price: '12',
        incart: '4'
    },
    {
        name: 'Fried Squid',
        tag: 'friedquid',
        price: '12',
        incart: '5'
    },
    {
        name: 'Fried Squid',
        tag: 'friedquid',
        price: '12',
        incart: '6'
    },
    {
        name: 'Fried Squid',
        tag: 'friedquid',
        price: '12',
        incart: '7'
    },
    {
        name: 'Fried Squid',
        tag: 'friedquid',
        price: '12',
        incart: '8'
    },
    {
        name: 'Fried Squid',
        tag: 'friedquid',
        price: '12',
        incart: '9'
    },
]

for(let i=0; i < cart.length; i++) {
    // console.log(cart)
    cart[i].addEventListener('click', () => {
        console.log('add to cart')
        cartNumbers()
    })
}

const cartNumbers =  () => {
    const productNumbers = localStorage.getItem('cartNumbers')
    console.log(productNumbers)
    productNumbers = parseInt(productNumbers) // convert string to number
    localStorage.setItem('cartNumbers', 1)
}