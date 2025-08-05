let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  let totalPrice = 0;
  let mostExpensive = { name: "N/A", price: 0 };

  products.forEach((product, index) => {
    totalPrice += product.price;
    if (product.price > mostExpensive.price) {
      mostExpensive = product;
    }

    const item = document.createElement("div");
    item.innerHTML = `
      <img src="${product.img}" width="100">
      <p><strong>${product.name}</strong></p>
      <p>${product.price.toLocaleString()} VNĐ</p>
      <button onclick="deleteProduct(${index})">🗑️ Xóa</button>
      <hr>
    `;
    list.appendChild(item);
  });

  document.getElementById("total-products").textContent = products.length;
  document.getElementById("total-price").textContent = totalPrice.toLocaleString();
  document.getElementById("most-expensive").textContent = mostExpensive.name + " - " + mostExpensive.price.toLocaleString() + " VNĐ";
}

function addProduct() {
  const name = document.getElementById("name").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const img = document.getElementById("img").value.trim();

  if (!name || isNaN(price) || !img) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const newProduct = { name, price, img };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("img").value = "";
}

function deleteProduct(index) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
  }
}

function displayProducts() {
  const productList = document.getElementById("product-list");
  const products = JSON.parse(localStorage.getItem("products")) || [];

  productList.innerHTML = "";

  products.forEach((p, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" width="100" />
      <h3>${p.name}</h3>
      <p>Giá: ${p.price.toLocaleString()} VNĐ</p>
    `;
    productList.appendChild(div);
  });
}


window.onload = renderProducts;
