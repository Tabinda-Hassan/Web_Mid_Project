let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

// Toggle menu for responsive navigation
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Display items in cart
function displayCartItems() {
    const cartItemsDiv = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('totalPrice');
    let total = 0;

    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p class="price">$${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsDiv.appendChild(cartItemDiv);
            total += item.price;
        });
    }
    totalPriceElement.textContent = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);  // Remove item at index
    localStorage.setItem('cartItems', JSON.stringify(cart));  // Update localStorage
    displayCartItems();  // Refresh display
}

// Checkout function
function checkout() {
    if (cart.length > 0) {
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    } else {
        alert('Your cart is empty!');
    }
}


// Display items on page load
window.onload = displayCartItems;
