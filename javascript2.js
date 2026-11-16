// 2-11-2026

// shopping Cart Functionality Javascript

// const cartButton = document.getElementById("cartButton")

const cartModal = document.getElementById("cartModal")
const closeCart = document.getElementById("closeCart")
const cartItemsContainer = document.getElementById("cartItems")
const cartTotal = document.getElementById("cartTotal ")
const clearCartButton = document.getElementById("clearCart")

// cart data
// const cart = []

// Add product to cart

function addTocart(productId)  {
    const product = products.find(items =>  {
        return String(items.id) === String(productId)
    })

    if(!product) return

    const existingItem = cart.find(items => {
        return String(items.id) === String(productId)
    })
    
    if(existingItem)  {
        existingItem.quantity++
    }else{
        cart.push({
            ...product,
            quantity: 1
        })
    }

    updateCart()
}

function updateCart()  {
    const totalItems = cart.reduce(
        (total,item)  => total + item.quantity,
        0
    )
    cartCount.textContent = totalItems
    cartItemsContainer.innerHTML = ""

    if(cart.lenght === 0) {
        cartItemsContainer.textContent = "Your Cart is Empty."
    }
}


































































    let totalPrice = 0

    cart.forEach(item => {
        totalPrice += item.price * item.quantity

        const cartItem = document.createElement("div")
        cartItem.className = "cart-item"

        const name = document.createElement("h4")
        name.textContent = item.name
        
        const price = document.createElement("p")
        price.textContent =
        ` ₹${item.price.toLocaleString("en-IN")} * ${item.quantity}`


        cartItem.append{
            name,
            price
        }
        
        cartItemsContainer.appendChild(cartItem)
    })
    cartTotal.textContent =
        ` Total: ₹${totalPrice.toLocaleString("en-IN")}`



// Listen for add to cart

productGrid.addEventListener("click",  function()   {

})









// Open Cart

clearCartButton.addEventListener("click",  function()   {
    cartModal.classList.remove("hidden")
    updateCart()
})


// close cart

closeCart.addEventListener("click", function()   {
    cartModal.classList.add("hidden")
})

// clear complete cart

clearCartButton.addEventListener("click", function()    {
    cart.lenght = 0
    updateCart()
})

// initial cart display

updateCart()