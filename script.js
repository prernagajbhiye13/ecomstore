const searchInput = document.getElementById("searchInput");

const searchBtn = document.getElementById("searchbtn");

const cartButton = document.getElementById("cartButton");

const cartCount = document.getElementById("cartcount");

const categoryFilters = document.getElementById("category-filter");

const productGrid = document.getElementById("productGrid");

const sortSelect = document.getElementById("sort-select");


// Step 2: Initial project data


const products = [

{

id: 1,

name: "Wireless Headphones",

price: 1299,

Categories: "electronics",

rating: 4.5,

image: "https://m.media-amazon.com/images/I/31818K7ii3L._SY300_SX300_QL70_FMwebp_.jpg"

},

{

id: 2,

name: "Bluetooth Speaker",

price: 899,

Categories: "electronics",

rating: 4.2,

image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"

},

{

id: 3,

name: "Smart Watch",

price: 1599,

Categories: "electronics",

rating: 4.3,

image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"

},

{

id: 4,

name: "Smartphone",

price: 12999,

Categories: "electronics",

rating: 4.6,

image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"

},

{

id: 5,

name: "Running Shoes",

price: 1999,

Categories: "fashion",

rating: 4.4,

image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"

},

{

id: 6,

name: "Classic Sunglasses",

price: 699,

Categories: "fashion",

rating: 4.1,

image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"

},

{

id: 7,

name: "Laptop",

price: 45999,

Categories: "computer accessories",

rating: 4.7,

image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"

},

{

id: 8,

name: "Wireless Mouse",

price: 499,

Categories: "computer accessories",

rating: 4.3,

image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"

},

{

id: 9,

name: "Table Lamp",

price: 799,

Categories: "home & living",

rating: 4.2,

image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400"

},

{

id: 10,

name: "Coffee Mug",

price: 299,

Categories: "home & living",

rating: 4.0,

image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400"

}

];


const cart = [];


// Helper function to escape HTML


function escapeHTML(value) {

return String(value).replace(/[&<>"']/g, character => {

const entities = {

"&": "&amp;",

"<": "&lt;",

">": "&gt;",

'"': "&quot;",

"'": "&#39;"

};


return entities[character];

});

}


// Render Products


function renderProducts(productList) {


// Check if products are empty


if (productList.length === 0) {

productGrid.innerHTML = `

<div class="empty-message">

<h3>No products found</h3>

<p>Please check back later</p>

</div>

`

return

}


// Generate HTML for every product


let productsHTML = "";


productList.forEach(product => {

productsHTML += `

<article class="product-card">

<div class="product-image">


<img

src="${escapeHTML(product.image)}"

alt="${escapeHTML(product.name)}"

loading="lazy"

>


<span class="product-rating">

â­� ${Number(product.rating).toFixed(1)}

</span>


</div>


<div>

<p class="product-category">

${escapeHTML(product.Categories)}

</p>


<h3 class="product-name">

${escapeHTML(product.name)}

</h3>


<div class="product-bottom">


<span class="product-price">

â‚¹${Number(product.price).toLocaleString("en-IN")}

</span>


<button

class="add-to-cart-btn"

type="button"

data-product-id="${Number(product.id)}"

disabled

title="Cart functionality coming on Day 6"

>

Add to cart

</button>


</div>

</div>

</article>

`;

});


productGrid.innerHTML = productsHTML;

}


// Step 3: Check if elements are connected correctly


console.log("Ecomstore connected");

console.log("Search Input:", searchInput);

console.log("Product Grid:", productGrid);

console.log("Products:", products);

console.log("Cart:", cart);


// Step 4: Display products


renderProducts(products);


// Search Function

function SearchProduct() {
    
    // step 1: get search input
    const searchTerm = searchInput.value
    .toLowerCase()
    .trim()

    // step 2: filter matching products

    const fiterProducts = products.filter(product=> {
        return product.name
                .toLowerCase()
                .includes(searchTerm)

    })

    // step 3 : Render matching products

    renderProducts(fiterProducts)

// step 4: show result in console

console.log("Search term :",searchTerm)
console.log("matching Products :",filteredProducts.length)

}



// search button click

searchBtn.addEventListener("click",SearchProduct)

// search while typing

searchInput.addEventListener("input" , SearchProduct)

searchInput.addEventListener("keydown" , function(event)   {
    if(event.key === "Enter")
        SearchProduct()
})







// Apply Filters

let selectedCategory = "all"

function applyFilters() {

    const searchTerm = searchInput.value
    .toLowerCase()
    .trim()

    // search filter
    let filteredProducts = products.filter(product => {
        return product.name 
        .toLowerCase()
        .trim()
    })

    // category filter
    
    if(selectedCategory !== "all") {
        filteredProducts = filteredProducts.filter(product => {
            return product.category === selectedCategory
        })
    }

    // sorting

    const sortValue = sortSelect.value

    if(sortValue === "price-low") {
        filteredProducts.sort((a,b) => a.price -  b.price)

    }else if(sortValue === "price-hight")  {
        filteredProducts.sort((a,b) => b.price -  a.price)
    }else if(sortValue === "rating") {
        filteredProducts.sort((a,b) => b.rating -  a.rating)

    }

    renderProducts(filteredProducts)
}

