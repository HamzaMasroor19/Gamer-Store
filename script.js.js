// Toggle Menu Functionality
function toggleMenu() {
    const menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("active");
}

// Product Gallery Image Switching
const productImg = document.getElementById("productImg");
const smallImg = document.getElementsByClassName("small-img");

if (smallImg.length > 0) {
    smallImg[0].onclick = function() {
        productImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function() {
        productImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function() {
        productImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function() {
        productImg.src = smallImg[3].src;
    }
}

// Cart Functionality
let cart = [];

function addToCart(productId, productName, productPrice) {
    cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1
    });
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
    
    // Add event listeners for "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productCard = this.closest(".product-card");
            const productId = productCard.dataset.id;
            const productName = productCard.querySelector("h4").textContent;
            const productPrice = parseFloat(productCard.querySelector("p").textContent.replace('Rs', ''));
            
            addToCart(productId, productName, productPrice);
            
            // Show confirmation
            alert(`${productName} added to cart!`);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const searchBar = document.querySelector('.search-bar');
    const searchBtn = document.querySelector('.search-bar button');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Toggle search bar on mobile
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                searchBar.classList.toggle('active');
                navLinks.classList.remove('active');
            }
        });
    }
    
    // Close menus when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container') && !e.target.closest('.search-bar')) {
            navLinks.classList.remove('active');
            if (searchBar) searchBar.classList.remove('active');
        }
    });
});