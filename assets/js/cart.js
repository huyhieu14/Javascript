var carts = JSON.parse(localStorage.getItem("carts") || "[]");
var tempPayment = [];
function increaseCount(a, b) {
  var result = carts.map((cart) => cart);
  var input = b.previousElementSibling;
  var id = b.getAttribute('data-id');
  var index = carts.findIndex(item => item.id === id);
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  var total = input.parentElement.parentElement.parentElement.getElementsByClassName('total-price-cart')[0];
  total.innerText = Number(value * carts[index].price);
  var cart = {
    ...carts[index],
    total: Number(total.innerText),
    value: input.value,
  };
  carts[index] = cart;
  localStorage.setItem('carts', JSON.stringify(carts));
}


function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}

carts.map((cart) => {
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
                      <span class="down" onClick="decreaseCount()"
                        >-</span
                      >
                      <input type="text" class="quantity" value="${cart.value || 1}" />
                      <span class="up" data-id="${cart.id}" onClick="increaseCount(event, this)"
                        >+</span
                      >
                    </div>
                  </td>
                  <td class="w-100 text-center">
                    <span class="total-price-cart text-center fs-4">${cart.total || cart.price}</span>
                    <span class="float-end">
                      <button type="button" class="btn button-delete-cart">
                        Xoá
                      </button>
                    </span>
                  </td>
                </tr>
        `
  );
});
