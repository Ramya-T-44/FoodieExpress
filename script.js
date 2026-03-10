/* ============================================
   FoodieExpress - JavaScript Functions
   ============================================ */

// Food Menu Data with Images
const foodMenu = [
    // Pizza
    { id: 1, name: 'Margherita Pizza', description: 'Classic tomato sauce with mozzarella and fresh basil', price: 299, category: 'pizza', emoji: '🍕', image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop' },
    { id: 2, name: 'Pepperoni Pizza', description: 'Loaded with pepperoni and extra cheese', price: 349, category: 'pizza', emoji: '🍕', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop' },
    { id: 3, name: 'Veggie Supreme', description: 'Bell peppers, olives, onions, mushrooms', price: 329, category: 'pizza', emoji: '🍕', image: 'https://images.unsplash.com/photo-1571407970349-bc16ff8543de?w=400&h=300&fit=crop' },
    { id: 4, name: 'Chicken BBQ Pizza', description: 'Grilled chicken with BBQ sauce', price: 399, category: 'pizza', emoji: '🍕', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
    
    // Burger
    { id: 5, name: 'Classic Cheese Burger', description: 'Juicy patty with melted cheese', price: 149, category: 'burger', emoji: '🍔', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop' },
    { id: 6, name: 'Chicken Burger', description: 'Grilled chicken with fresh vegetables', price: 179, category: 'burger', emoji: '🍔', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop' },
    { id: 7, name: 'Veggie Burger', description: 'Plant-based patty with lettuce and tomato', price: 129, category: 'burger', emoji: '🍔', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop' },
    { id: 8, name: 'Double Patty Burger', description: 'Two patties with extra cheese', price: 249, category: 'burger', emoji: '🍔', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop' },
    
    // Indian
    { id: 9, name: 'Butter Chicken', description: 'Creamy tomato gravy with tender chicken', price: 320, category: 'indian', emoji: '🍛', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop' },
    { id: 10, name: 'Palak Paneer', description: 'Cottage cheese in spinach gravy', price: 220, category: 'indian', emoji: '🍛', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop' },
    { id: 11, name: 'Dal Makhani', description: 'Slow-cooked black lentils', price: 180, category: 'indian', emoji: '🍛', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop' },
    { id: 12, name: 'Chicken Biryani', description: 'Aromatic rice with spiced chicken', price: 280, category: 'indian', emoji: '🍚', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop' },
    { id: 13, name: 'Vegetable Biryani', description: 'Mixed vegetables with fragrant rice', price: 220, category: 'indian', emoji: '🍚', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop' },
    { id: 14, name: 'Tandoori Chicken', description: 'Clay oven roasted chicken', price: 350, category: 'indian', emoji: '🍗', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
    
    // Chinese
    { id: 15, name: 'Chicken Fried Rice', description: 'Wok-tossed rice with chicken', price: 180, category: 'chinese', emoji: '🍳', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
    { id: 16, name: 'Vegetable Noodles', description: 'Stir-fried noodles with vegetables', price: 150, category: 'chinese', emoji: '🍜', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop' },
    { id: 17, name: 'Manchurian', description: 'Crispy balls in spicy sauce', price: 190, category: 'chinese', emoji: '🥟', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop' },
    { id: 18, name: 'Spring Rolls', description: 'Crispy rolls with vegetable filling', price: 120, category: 'chinese', emoji: '🥟', image: 'https://images.unsplash.com/photo-1548507200-39de1c66d15f?w=400&h=300&fit=crop' },
    
    // Desserts
    { id: 19, name: 'Chocolate Lava Cake', description: 'Warm cake with molten chocolate', price: 150, category: 'dessert', emoji: '🍰', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop' },
    { id: 20, name: 'Ice Cream Sundae', description: 'Vanilla ice cream with toppings', price: 100, category: 'dessert', emoji: '🍦', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
    { id: 21, name: 'Gulab Jamun', description: 'Sweet milk dumplings in sugar syrup', price: 80, category: 'dessert', emoji: '🟤', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop' },
    { id: 22, name: 'Brownie', description: 'Rich chocolate brownie', price: 120, category: 'dessert', emoji: '🟫', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop' },
    
    // Beverages
    { id: 23, name: 'Cold Coffee', description: 'Creamy iced coffee', price: 80, category: 'beverage', emoji: '☕', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=300&fit=crop' },
    { id: 24, name: 'Mango Shake', description: 'Fresh mango blended with milk', price: 100, category: 'beverage', emoji: '🥭', image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=400&h=300&fit=crop' },
    { id: 25, name: 'Fresh Lime Soda', description: 'Refreshing lime with soda', price: 60, category: 'beverage', emoji: '🍋', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop' },
    { id: 26, name: 'Masala Chai', description: 'Traditional Indian spiced tea', price: 40, category: 'beverage', emoji: '🍵', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop' }
];

// Quantity tracker for each food item
const quantities = {};

// Initialize quantities
foodMenu.forEach(item => {
    quantities[item.id] = 1;
});

/* ============================================
   Authentication Functions
   ============================================ */

// Check if user is logged in
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Check if admin is logged in
function checkAdminAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
        return false;
    }
    
    const user = JSON.parse(currentUser);
    if (user.role !== 'admin') {
        // Redirect to home if not admin
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Validate login credentials
function validateLogin(email, password) {
    // Get registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Demo users data
    const demoUsers = [
        { email: 'admin@foodie.com', password: '1234', role: 'admin', name: 'Admin User' },
        { email: 'user@foodie.com', password: '1234', role: 'user', name: 'Regular User' }
    ];
    
    // Combine demo users and registered users
    const allUsers = [...demoUsers, ...registeredUsers];
    
    const user = allUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
    
    return false;
}

// Signup new user
function signup(name, email, password, confirmPassword) {
    // Validate input
    if (!name || !email || !password || !confirmPassword) {
        return { success: false, message: 'Please fill in all fields!' };
    }
    
    if (password !== confirmPassword) {
        return { success: false, message: 'Passwords do not match!' };
    }
    
    if (password.length < 4) {
        return { success: false, message: 'Password must be at least 4 characters!' };
    }
    
    // Get existing users
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Check if email already exists
    const demoUsers = [
        { email: 'admin@foodie.com' },
        { email: 'user@foodie.com' }
    ];
    
    const allEmails = [...demoUsers, ...registeredUsers].map(u => u.email.toLowerCase());
    
    if (allEmails.includes(email.toLowerCase())) {
        return { success: false, message: 'Email already registered!' };
    }
    
    // Create new user
    const newUser = {
        name: name,
        email: email.toLowerCase(),
        password: password,
        role: 'user',
        createdAt: new Date().toISOString()
    };
    
    // Save to registered users
    registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    return { success: true, message: 'Account created successfully!' };
}

/* ============================================
   Home Page Functions
   ============================================ */

// Initialize home page
function initializeHomePage() {
    renderFoodMenu(foodMenu);
}

// Render food menu cards
function renderFoodMenu(items) {
    const foodGrid = document.getElementById('foodGrid');
    const noResults = document.getElementById('noResults');
    
    if (items.length === 0) {
        foodGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    let html = '';
    items.forEach((item, index) => {
        html += `
            <div class="food-card" style="animation-delay: ${index * 0.05}s">
                <div class="food-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <span class="emoji-fallback" style="display:none;">${item.emoji}</span>
                    <span class="category-badge">${item.category}</span>
                </div>
                <div class="food-info">
                    <h3 class="food-name">${item.name}</h3>
                    <p class="food-description">${item.description}</p>
                    <div class="food-footer">
                        <span class="food-price">₹${item.price}</span>
                        <div class="food-actions">
                            <div class="quantity-selector">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                                <span class="quantity-value" id="qty-${item.id}">${quantities[item.id]}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                            <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                                <i class="fas fa-cart-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    foodGrid.innerHTML = html;
}

// Update quantity for an item
function updateQuantity(itemId, change) {
    quantities[itemId] += change;
    if (quantities[itemId] < 1) quantities[itemId] = 1;
    if (quantities[itemId] > 10) quantities[itemId] = 10;
    
    document.getElementById(`qty-${itemId}`).textContent = quantities[itemId];
}

// Search food items
function searchFood(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderFoodMenu(foodMenu);
        return;
    }
    
    const filteredItems = foodMenu.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
    
    renderFoodMenu(filteredItems);
}

// Filter by category
function filterByCategory(category) {
    if (category === 'all') {
        renderFoodMenu(foodMenu);
    } else {
        const filteredItems = foodMenu.filter(item => item.category === category);
        renderFoodMenu(filteredItems);
    }
}

/* ============================================
   Cart Functions
   ============================================ */

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('foodieCart') || '[]');
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('foodieCart', JSON.stringify(cart));
    updateCartCount();
}

// Add item to cart
function addToCart(itemId) {
    const item = foodMenu.find(f => f.id === itemId);
    if (!item) return;
    
    const cart = getCart();
    const quantity = quantities[itemId];
    
    // Check if item already exists in cart
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            emoji: item.emoji,
            quantity: quantity
        });
    }
    
    saveCart(cart);
    
    // Reset quantity
    quantities[itemId] = 1;
    document.getElementById(`qty-${itemId}`).textContent = 1;
    
    showToast(`${item.name} added to cart!`, 'success');
}

// Update cart count in navbar
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
        if (totalItems > 0) {
            el.style.display = 'flex';
        } else {
            el.style.display = 'none';
        }
    });
}

/* ============================================
   Cart Page Functions
   ============================================ */

// Initialize cart page
function initializeCartPage() {
    renderCart();
}

// Render cart items
function renderCart() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCart = document.getElementById('emptyCart');
    const cartSummarySection = document.getElementById('cartSummarySection');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCart.style.display = 'block';
        cartSummarySection.style.display = 'none';
        return;
    }
    
    emptyCart.style.display = 'none';
    cartSummarySection.style.display = 'block';
    
    let html = '';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        html += `
            <div class="cart-item-card">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-price">₹${item.price} each</span>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                </div>
                <span class="cart-item-total">₹${itemTotal}</span>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = html;
    
    // Update summary
    updateCartSummary();
}

// Update cart item quantity
function updateCartItemQuantity(itemId, change) {
    const cart = getCart();
    const itemIndex = cart.findIndex(c => c.id === itemId);
    
    if (itemIndex === -1) return;
    
    cart[itemIndex].quantity += change;
    
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }
    
    saveCart(cart);
    renderCart();
}

// Remove item from cart
function removeFromCart(itemId) {
    const cart = getCart();
    const newCart = cart.filter(c => c.id !== itemId);
    saveCart(newCart);
    renderCart();
    showToast('Item removed from cart', 'info');
}

// Update cart summary
function updateCartSummary() {
    const cart = getCart();
    
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    
    const deliveryFee = cart.length > 0 ? 40 : 0;
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + deliveryFee + tax;
    
    document.getElementById('subtotalPrice').textContent = '₹' + subtotal;
    document.getElementById('deliveryFee').textContent = '₹' + deliveryFee;
    document.getElementById('taxAmount').textContent = '₹' + tax;
    document.getElementById('totalPrice').textContent = '₹' + total;
}

/* ============================================
   Admin Page Functions
   ============================================ */

// Initialize admin page
function initializeAdminPage() {
    // Admin page initialization if needed
}

/* ============================================
   Toast Notification
   ============================================ */

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    // Set icon based on type
    const icon = toast.querySelector('i');
    if (type === 'success') {
        icon.className = 'fas fa-check-circle';
    } else if (type === 'error') {
        icon.className = 'fas fa-times-circle';
    } else if (type === 'info') {
        icon.className = 'fas fa-info-circle';
    }
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Add CSS for toast animation
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    .toast {
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 5000;
        padding: 16px 24px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 280px;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }
    
    .toast.show {
        transform: translateX(0);
    }
    
    .toast i {
        font-size: 1.3rem;
    }
    
    .toast i.fa-check-circle {
        color: #2ed573;
    }
    
    .toast i.fa-times-circle {
        color: #ff4757;
    }
    
    .toast i.fa-info-circle {
        color: #00d4aa;
    }
`;
document.head.appendChild(toastStyle);

