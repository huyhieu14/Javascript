var carts = JSON.parse(localStorage.getItem("carts") || "[]");

carts.map((cart, index) => {
  cartProduct.insertAdjacentHTML(
    "afterbegin",
    `
        <tr>
                  <td class="d-flex mt-4 product-cart">
                    <div class="img-cart">
                      <img
                        src=${cart.image}
                        alt=""
                        style="width: 100px"
                      />
                    </div>
                    <div class="info-cart">
                      <ul class="list-unstyled">
                        <li class="fw-bold">
                          ${cart.title}
                        </li>
                        <li>$${cart.price}</li>
                        <li>
                          ${cart.core}
                          <br> 
                          ${cart.ram}
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div class="counter">
                      <span class="down" data-id="${
                        cart.id
                      }" onClick="decreaseCount(event, this)"
                        >-</span
                      >
                      <input type="text" class="quantity" value="${
                        cart.value || 1
                      }" />
                      <span class="up" data-id="${
                        cart.id
                      }" onClick="increaseCount(event, this)"
                        >+</span
                      >
                    </div>
                  </td>
                  <td class="w-100 text-center">
                    <span class="text-center fs-4">$</span><span class="total-price-cart text-center fs-4">${
                      cart.total || cart.price
                    }</span>
                    <span class="float-end">
                      <button data-id="${index}" type="button" class="btn button-delete-cart">
                        Xoá
                      </button>
                    </span>
                  </td>
                </tr>
        `
  );
});
// payment.insertAdjacentHTML(
//   "afterbegin",
//   `

//     `
// );

var totalS = 0;

function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var id = b.getAttribute("data-id");
  var index = carts.findIndex((item) => item.id === id);
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  var total =
    input.parentElement.parentElement.parentElement.getElementsByClassName(
      "total-price-cart"
    )[0];
  total.innerText = Number(value * carts[index].price);
  var cart = {
    ...carts[index],
    total: Number(total.innerText),
    value: input.value,
  };
  carts[index] = cart;
  localStorage.setItem("carts", JSON.stringify(carts));
  tempPayment();
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var id = b.getAttribute("data-id");
  var index = carts.findIndex((item) => item.id === id);
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
  var total =
    input.parentElement.parentElement.parentElement.getElementsByClassName(
      "total-price-cart"
    )[0];
  total.innerText = Number(value * carts[index].price);
  var cart = {
    ...carts[index],
    total: Number(total.innerText),
    value: input.value,
  };
  carts[index] = cart;
  localStorage.setItem("carts", JSON.stringify(carts));
  tempPayment();
}

(() => {
  document.querySelectorAll(".button-delete-cart").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.parentNode.remove();
      var id = e.target.getAttribute("data-id");
      carts.splice(id, 1);
      localStorage.setItem("carts", JSON.stringify(carts));
      window.location.reload();
    });
  });
})();

function tempPayment() {
  let total = 0;
  let finalTotal = 0;
  let totalQuantity = 0;
  carts.forEach((product) => {
    total += +product.total;
    totalQuantity += +product.value;
  });
  document.getElementById("tempTotal").innerHTML = "$" + total;
  document.getElementById("totalQuantity").innerHTML = totalQuantity;

  if (total > 2500) {
    finalTotal = total;
    document.getElementById("shipping").innerHTML = "Miễn Phí";
  } else {
    finalTotal = total + 100;
    document.getElementById("shipping").innerHTML = "$" + 100;
  }
  document.getElementById("finalTotal").innerHTML = "$" + finalTotal;
  localStorage.setItem("finalPayment", finalTotal)
}

tempPayment();
var total = localStorage.getItem("finalPayment");
document.getElementById("total").setAttribute('value', total);
document.getElementById("Products").setAttribute('value', carts);
function reloadCart(){
  localStorage.setItem("carts", []);
}

