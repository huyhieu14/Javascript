var carts = JSON.parse(localStorage.getItem("carts") || "[]");
console.log(carts);
var user = JSON.parse(localStorage.getItem("user") || "[]");
var checkUser = localStorage.getItem("userCurrent2");
console.log(checkUser);
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

user.map((user, carts) => {
  if ((user.email == checkUser)) {
    checkOut.insertAdjacentHTML(
      "beforeend",
      `
      <form id="validate" action="http://localhost:3000/Oder" method="POST" target="submitForm">
      <div class="row">
        <div class="col-6">
          <h3>Địa chỉ thanh toán
          </h3>
          <label for="fname"
            ><i class="fa fa-user"></i> Họ và tên</label
          >
          <input
            type="text"
            id="fname"
            name="fullName"
            placeholder="Tên của bạn"
            required
            value="${user.userName}"
          />
          <label for="email"
            ><i class="fa fa-envelope"></i> Email</label
          >
          <input
            type="text"
            id="email"
            name="email"
            placeholder="nguyenvana@gmail.com"
            required
            value="${user.email}"
          />
          <label for="adr"
            ><i class="fa fa-address-card-o"></i> Địa chỉ</label
          >
          <input
            type="text"
            id="adr"
            name="address"
            placeholder="113 Trần Phú"
            required
          />
          <label for="city"
            ><i class="fa fa-institution"></i> Thành Phố</label
          >
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Huế"
            required
          />

          <div class="row">
            <div class="col-50">
              <label for="state">Tỉnh</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="TT.Huế"
                required
              />
            </div>
            <div class="col-50">
              <label for="zip">Số điện thoại</label>
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="+84"
                required
                value="${user.phone}"
              />
            </div>
          </div>
        </div>
        <div class="col-6">
          <h3>Thanh toán</h3>
          <label for="fname">Hình thức thanh toán hỗ trợ</label>
          <div class="icon-container">
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-cc-amex"></i>
            <i class="fab fa-cc-mastercard"></i>
            <i class="fab fa-cc-discover"></i>
          </div>

          <label for="cname">Tên trên Card</label>
          <input
            type="text"
            id="cname"
            name="cardName"
            placeholder="Soeng Souy"
            required
          />
          <label for="ccnum">Mã credit card</label>
          <input
            type="text"
            id="ccnum"
            name="cardNumber"
            placeholder="1111-2222-3333-4444"
            required
          />
          <label for="expmonth">Tháng hết hạn</label>
          <input
            type="text"
            id="expmonth"
            name="expmonth"
            placeholder="September"
            required
          />
          <div class="row">
            <div class="col-6">
              <label for="expyear">Năm hết hạn</label>
              <input
                type="text"
                id="expyear"
                name="expyear"
                placeholder="2021"
                required
              />
            </div>
            <div class="col-6">
              <label for="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="ccv"
                placeholder="352"
                required
              />
            </div>
            <div class="col-6 d-none">
              <label for="cvv">Total</label>
              <input
                type="text"
                id="total"
                name="total"
                placeholder="352"
                value=
                required
              />
            </div>
            <div class="col-6 d-none">
              <label for="cvv">Products</label>
              
            </div>
            
            <div class="col-12">
              <button
              type="submit"
              value="THANH TOÁN"
              class="btn mt-4"
              id="btn-check"
              onClick="reloadCart()"
            >THANH TOÁN</button>
            </div>
          </div>
        </div>
      </div>
    </form>  
      `
    );
  }
});

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
var valueDiscount = "SUMMER-2021"

var discount = 0;
function tempPayment() {
  var valueDiscount = "SUMMER-2021"
  var inputDiscount = document.getElementById("discount").value
  if (inputDiscount != "" && inputDiscount == valueDiscount){
    discount = 200;
    document.getElementById("monneyDiscount").innerHTML = "$" + discount;
  } else {
    document.getElementById("monneyDiscount").innerHTML = "$" + 0;
  }
  let total = 0;
  let finalTotal = 0;
  let totalQuantity = 0;
  carts.forEach((product) => {
    total += +product.total;
    totalQuantity += +product.value;
  });
  document.getElementById("tempTotal").innerHTML = "$" + total;
  document.getElementById("totalQuantity").innerHTML = totalQuantity;

  if (total > 2500 || total == 0 || discount != 0) {
    finalTotal = total - discount;
    console.log(discount)
    document.getElementById("shipping").innerHTML = "Miễn Phí";
  } else {
    finalTotal = total + 100 - discount;
    document.getElementById("shipping").innerHTML = "$" + 100;
  }
  document.getElementById("finalTotal").innerHTML = "$" + finalTotal;
  localStorage.setItem("finalPayment", finalTotal);
}

tempPayment();
function caculateDis(){
  var inputDiscount = document.getElementById("discount").value
  if (inputDiscount != "" && inputDiscount == valueDiscount){
    discount = 200;
    document.getElementById("monneyDiscount").innerHTML = "$" + discount;
  } else {
    discount = 0;
    document.getElementById("monneyDiscount").innerHTML = "$" + 0;
  }
  console.log(discount)
  tempPayment()
}
var total = localStorage.getItem("finalPayment");
document.getElementById("total").setAttribute("value", total);
document.getElementById("Products").setAttribute("value", carts);

function reloadCart() {
  console.log("ABC")
  localStorage.setItem("carts", []);
  Swal.fire("Cảm ơn bạn đã mua hàng!", "Click để xác nhận!", "Ok");
    window.location="../../index.html";
}

