function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsDiv = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  let total = 0;

  cartItemsDiv.innerHTML = "";
  cart.forEach((item, index) => {
    total += item.price;
    cartItemsDiv.innerHTML += `
      <div class="product-card">
        <h3>${item.name}</h3>
        <p>Giá: ${item.price.toLocaleString()} đ</p>
        <button onclick="removeItem(${index})">❌ Xóa</button>
      </div>
    `;
  });

  totalEl.textContent = total.toLocaleString();
  updateCartCount();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelectorAll("#cart-count").forEach(span => {
    span.textContent = cart.length;
  });
}

// Gọi khi tải trang
loadCart();
