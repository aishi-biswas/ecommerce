const itemCountEl = document.querySelector(".count");
const decreaseBtn = document.querySelector(".minus");
const increaseBtn = document.querySelector(".plus");
const cartIconBtn = document.querySelector(".cart-icon");
const cartDropdown = document.querySelector(".cart-container");
const addToCartButton = document.querySelector(".add-to-cart");
const cartItemList = document.querySelector(".cart-items");
const checkoutBtn = document.querySelector(".checkout");
const totalCartItemsCount = document.querySelector(".cart-count");

let itemCount = 0;
let totalCartQuantity = 0;

const updateItemCount = (newCount) => {
  itemCount = newCount;
  itemCountEl.textContent = itemCount;
};

decreaseBtn.addEventListener("click", () => {
  if (itemCount > 0) {
    updateItemCount(itemCount - 1);
  }
});

increaseBtn.addEventListener("click", () => {
  updateItemCount(itemCount + 1);
});

totalCartItemsCount.addEventListener("click", () => {
  cartDropdown.classList.toggle("active");
});

const updateCartQuantity = () => {
  const cartItemsArray = document.querySelectorAll(".cart-item");
  totalCartQuantity = 0;
  cartItemsArray.forEach((item) => {
    totalCartQuantity += parseInt(item.dataset.quantity);
  });

  totalCartItemsCount.innerHTML = `<span class="qty">${totalCartQuantity}</span>`;
};

const addItemToCart = (productName, productPrice, productImageSrc) => {
  const totalItemPrice = itemCount * productPrice;

  const cartItemElement = document.createElement("div");
  cartItemElement.classList.add("cart-item");
  cartItemElement.dataset.quantity = itemCount;
  cartItemElement.innerHTML = `
      <img src="${productImageSrc}" alt="${productName}"/>
      <div class="item-details">
        <div>${productName}</div>
        <div>
            <p>
                $${productPrice.toFixed(2)} x ${itemCount}
                <span class='total-price'>$${totalItemPrice.toFixed(2)}</span>
            </p>
        </div>
        </div>
        <button class="delete-item">
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
        </button>
    `;

  cartItemList.appendChild(cartItemElement);

  updateCartQuantity();

  if (cartItemList.classList.contains("empty")) {
    cartItemList.classList.remove("empty");
    checkoutBtn.classList.remove("empty");
  }

  const deleteItemBtn = cartItemElement.querySelector(".delete-item");
  deleteItemBtn.addEventListener("click", (event) => {
    const cartItem = event.target.closest(".cart-item");
    removeItemFromCart(cartItem);
  });
};

addToCartButton.addEventListener("click", () => {
  if (itemCount === 0) return;
  const productName = document.querySelector(".main .product-name").textContent;
  const productPriceElement = document.querySelector(".main .current-price");
  const productPrice = parseFloat(productPriceElement.textContent.replace("$", ""));
  const productImage = document
    .querySelector(".default.gallery .main-img img")
    .getAttribute("src");

  addItemToCart(productName, productPrice, productImage);
  cartDropdown.classList.add("active");

  updateItemCount(0);
});

const removeItemFromCart = (cartItem) => {
  cartItem.remove();
  updateCartQuantity();

  if (cartItemList.children.length === 1) {
    cartItemList.classList.add("empty");
    checkoutBtn.classList.add("empty");
  }
};
