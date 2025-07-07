// Product Gallery Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Image Gallery
    const mainImage = document.getElementById('product-main-img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Update main image
            const thumbImg = this.querySelector('img');
            mainImage.src = thumbImg.src;
            
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Color Selection
    const colorSwatches = document.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            colorSwatches.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Size Selection
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(o => o.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Quantity Selector
    const minusBtn = document.querySelector('.quantity-minus');
    const plusBtn = document.querySelector('.quantity-plus');
    const quantityInput = document.querySelector('.quantity-control input');
    
    minusBtn.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        if (value < 10) {
            quantityInput.value = value + 1;
        }
    });

    // Product Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Add to Cart Functionality
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Get product details
            const productName = document.querySelector('.product-info h1').textContent;
            const price = document.querySelector('.current-price').textContent;
            const selectedColor = document.querySelector('.color-swatch.active').getAttribute('data-color');
            const selectedSize = document.querySelector('.size-option.active').textContent;
            const quantity = document.querySelector('.quantity-control input').value;
            
            // Create cart item object
            const cartItem = {
                name: productName,
                price: price,
                color: selectedColor,
                size: selectedSize,
                quantity: quantity,
                image: mainImage.src
            };
            
            // Add to cart (in a real app, you would save this to localStorage or send to server)
            alert(`${productName} (${selectedSize}, ${selectedColor}) added to cart!`);
            
            // In a real implementation:
            // let cart = JSON.parse(localStorage.getItem('cart')) || [];
            // cart.push(cartItem);
            // localStorage.setItem('cart', JSON.stringify(cart));
        });
    }
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