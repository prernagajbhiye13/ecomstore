// Data Storage


const products =  [
    {
        id:1,
        name:wireless,
        price:999,
        desc:"ifheriguriu fivdfvidfoji"

    },

]

// forEach() se loop

products.forEach(product => {
    console.log(product.name)
})

// excape html function()

const name = "<h1>Hello</h1>"

console.log(name)
document.body.innerHTML = name;