// ================================
// Cart + Order Management Script
// ================================

// Single source of truth
let orderList = [];

/**
 * Add item to the order.
 * @param {string} item - Name of the menu item
 * @param {number|string} price - Item price
 */
function addToOrder(item, price) {
  orderList.push({ item: String(item), price: Number(price) });
  updateOrderDisplay();
  updateCartIcon();
}

/**
 * Render all selected orders inside textarea (#orderItems).
 */
function updateOrderDisplay() {
  const orderItemsTextarea = document.getElementById("orderItems");
  if (!orderItemsTextarea) return;

  orderItemsTextarea.value = orderList
    .map((order, i) => `${i + 1}. ${order.item} - ₹${order.price}`)
    .join("\n");
}

/**
 * Update the floating cart icon count (#cartCount).
 */
function updateCartIcon() {
  const cartCountEl = document.getElementById("cartCount");
  if (!cartCountEl) return;

  cartCountEl.textContent = orderList.length;
}

/**
 * Smooth-scroll to a section by its id.
 * @param {string} categoryId
 */
function scrollToCategory(categoryId) {
  const el = document.getElementById(categoryId);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth" });
}

/**
 * Init event listeners after DOM loads.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Cart icon click → scroll to "Your Order"
  const cartIcon = document.getElementById("cartIcon");
  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      scrollToCategory("orderSummary");
    });
  }
});
