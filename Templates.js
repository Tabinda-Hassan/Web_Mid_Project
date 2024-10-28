// Toggle menu for responsive navigation
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Array containing planner product details
let products = [
    {
        "id": 1,
        "name": "Social Media Template",
        "price": 3,
        "image": "templates1.png",
        "description": "Streamline your social media strategy with this versatile template for planning and scheduling posts."
    },
    {
        "id": 2,
        "name": "Social Media Template",
        "price": 3,
        "image": "templates2.png",
        "description": "Streamline your social media strategy with this versatile template for planning and scheduling posts."
    },
    {
        "id": 3,
        "name": "Social Media Template",
        "price": 3,
        "image": "templates3.png",
        "description": "Streamline your social media strategy with this versatile template for planning and scheduling posts."
    },
    {
        "id": 4,
        "name": "Social Media Template",
        "price": 3,
        "image": "templates4.png",
        "description": "Streamline your social media strategy with this versatile template for planning and scheduling posts."
    },
    {
        "id": 5,
        "name": "Social Media Template",
        "price": 5,
        "image": "templates5.png",
        "description": "Streamline your social media strategy with this versatile template for planning and scheduling posts."
    },
    {
        "id": 6,
        "name": "Social Media Template",
        "price": 10,
        "image": "templates6.png",
        "description": "Streamline your social media strategy with this versatile template for planning and scheduling posts."
    }
];




// Function to render product cards
function displayProducts() {
    const listProduct = document.querySelector('.listProduct');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <p>${product.description}</p>
            <a href="#" class="add-to-cart-button" onclick="addToCart(${product.id})">Add to Cart</a>
        `;
        listProduct.appendChild(productCard);
    });
}

// Function to add items to the cart
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
 // Add the selected product, including the image URL
 cartItems.push({
    id: selectedProduct.id,
    name: selectedProduct.name,
    price: selectedProduct.price,
    image: selectedProduct.image // Include image URL
});

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    alert(`${selectedProduct.name} has been added to your cart.`);
}
// Call the function to display products when the page loads
window.onload = displayProducts;