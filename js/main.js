// AandA-stores Main JavaScript
// Handles navigation, cart, product rendering, and interactivity

// Cart state (persisted in localStorage)
let cart = JSON.parse(localStorage.getItem('aanda_cart')) || [];

// DOM Elements
const cartCountEl = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartEmptyEl = document.getElementById('cart-empty');
const cartContentEl = document.getElementById('cart-content');
const checkoutBtn = document.getElementById('checkout-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setupMobileMenu();
  renderProductGrid();
  renderCart();
});
// ===== Mobile Menu =====
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('nav-links');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
}

// ===== Cart Functions =====
function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveCart();
  updateCartCount();
  showAddedToCartToast(product.name);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  renderCart();
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    updateCartCount();
    renderCart();
  }
}

function saveCart() {
  localStorage.setItem('aanda_cart', JSON.stringify(cart));
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountEl) {
    cartCountEl.textContent = totalItems;
    cartCountEl.style.display = totalItems > 0 ? 'block' : 'none';
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    updateCartCount();
    renderCart();
  }
}

// ===== Render Product Grid (products.html) =====
// ===== Render Product Grid (products.html) =====
function renderProductGrid() {
  const container = document.getElementById('product-grid');
  if (!container) return;

  const searchInput = document.getElementById('search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let currentFilter = 'all';
  let currentSearch = '';

  function render() {
    let filtered = products;

    if (currentFilter !== 'all') {
      filtered = filtered.filter(p => p.category === currentFilter);
    }

    if (currentSearch) {
      const term = currentSearch.toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(term));
    }

    container.innerHTML = '';

    if (filtered.length === 0) {
      container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-light);"><p>No products found.</p></div>';
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = '<div class="product-image"><img src="' + product.image + '" alt="' + product.name + '"></div><div class="product-info"><span class="product-category">' + getCategoryName(product.category) + '</span><h3>' + product.name + '</h3><div class="product-price">\u20a6' + product.price.toLocaleString() + '</div><button class="btn" onclick="addToCart(' + product.id + ')">Add to Cart</button></div>';
      container.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.category;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      render();
    });
  }

// ===== Render Cart Page =====
function renderCart() {
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    if (cartEmptyEl) cartEmptyEl.style.display = 'block';
    if (cartContentEl) cartContentEl.style.display = 'none';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (cartEmptyEl) cartEmptyEl.style.display = 'none';
  if (cartContentEl) cartContentEl.style.display = 'block';
  if (checkoutBtn) checkoutBtn.disabled = false;

  cartItemsContainer.innerHTML = '';

  cart.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = '<td><div class="cart-item-row"><img src="' + item.image + '" alt="' + item.name + '" class="cart-item-image"><span>' + item.name + '</span></div></td><td>\u20a6' + item.price.toLocaleString() + '</td><td><div class="quantity-controls"><button onclick="updateQuantity(' + item.id + ', ' + (item.quantity - 1) + ')">-</button><span>' + item.quantity + '</span><button onclick="updateQuantity(' + item.id + ', ' + (item.quantity + 1) + ')">+</button></div></td><td>\u20a6' + (item.price * item.quantity).toLocaleString() + '</td><td><button class="remove-btn" onclick="removeFromCart(' + item.id + ')">Remove</button></td>';
    cartItemsContainer.appendChild(row);
  });

  if (cartTotalEl) {
    cartTotalEl.textContent = '\u20a6' + getCartTotal().toLocaleString();
  }
}

// ===== Checkout =====
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Thank you for shopping at AandA-stores!\n\nTotal: \u20a6' + getCartTotal().toLocaleString() + '\n\nYour order has been placed. We will contact you shortly to confirm delivery.');
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
  });
// ===== Product Detail Page =====
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));

  if (!productId) return;

  const product = getProductById(productId);
  if (!product) return;

  document.title = product.name + ' - AandA-stores';

  const nameEl = document.getElementById('product-name');
  const categoryEl = document.getElementById('product-category');
  const priceEl = document.getElementById('product-price');
  const descEl = document.getElementById('product-desc');
  const imageEl = document.getElementById('product-image');
  const addBtn = document.getElementById('add-to-cart-detail');
  const qtyInput = document.getElementById('product-quantity');

  if (nameEl) nameEl.textContent = product.name;
  if (categoryEl) categoryEl.textContent = getCategoryName(product.category);
  if (priceEl) priceEl.textContent = '\u20a6' + product.price.toLocaleString();
  if (descEl) descEl.textContent = product.description;
  if (imageEl) imageEl.src = product.image;

  if (addBtn && productId) {
    addBtn.onclick = () => {
      const qty = parseInt(qtyInput.value) || 1;
      addToCart(productId, qty);
    };
  }
}

if (document.getElementById('product-name')) {
  renderProductDetail();
}

// ===== Toast Notification =====
function showAddedToCartToast(productName) {
  const existing = document.querySelector('.cart-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'cart-toast';
  toast.innerHTML = '<div class="toast-content"><span>\u2713</span> "' + productName + '" added to cart</div>';
  toast.style.cssText = 'position: fixed; bottom: 30px; right: 30px; background: var(--primary); color: white; padding: 15px 25px; border-radius: 5px; box-shadow: var(--shadow-hover); z-index: 9999; display: flex; align-items: center; gap: 10px; font-weight: 600; animation: slideIn 0.3s ease;';

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

{const style = document.createElement('style');
style.textContent = '@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } } @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }';
document.head.appendChild(style);

// Make functions globally available for HTML onclick handlers
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

  const cat = categories.find(c => c.id === categoryId);
  return cat ? cat.name :categoryId;
}