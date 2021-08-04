// var carts = JSON.parse(localStorage.getItem("carts") || []);
var total = localStorage.getItem("finalPayment");
var informations = [];
fetch("http://localhost:3000/Oder")
.then((res) => res.json())
.then((data) => {
  informations = [...data];
  info(informations);
  buttonConfirm();
  buttonUnConfirm();
})
.then(() => {
  var z = document.querySelectorAll("#btnCancel");
  z.forEach((info) => {
    info.addEventListener("click", (e) => {
        console.log(1213)
      var id = e.target.getAttribute("data-id");
      fetch(`http://localhost:3000/Oder/${id}`, {
        method: "DELETE",
      }).then(() => {
        location.reload();
      });
    });
  });
});

function info(list) {
var html = list.map((infoCustomer, index) => {
  orderListing.insertAdjacentHTML(
    "beforeend",
    `
        <tr class="text-center">
                  <td>DH${infoCustomer.id}</td>
                  <td>
                    ${infoCustomer.fullName}
                    <button
                      type="button"
                      class="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal${infoCustomer.id}"
                    >
                      Xem
                    </button>
                    <div
                      class="modal fade"
                      id="exampleModal${infoCustomer.id}"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              class="modal-title"
                              id="exampleModalLabel"
                            >
                              Thông tin đặt hàng
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <ul class="list-unstyled text-left">
                              <li><b>Thông tin chuyển hàng</b></li>
                              <li><b>Tên:</b> ${infoCustomer.fullName}</li>
                              <li><b>Địa chỉ:</b> ${infoCustomer.address}</li>
                              <li><b>Thành Phố:</b>${infoCustomer.city}</li>
                              <li><b>Tỉnh:</b> ${infoCustomer.state}</li>
                              <li><b>Số điện thoại:</b>${infoCustomer.zip}</li>
                              <li><hr /></li>
                              <li><b>Thông tin thanh toán</b></li>
                              <li>
                                <b>Tên Chủ Thẻ:</b> ${infoCustomer.cardName}
                              </li>
                              <li><b>Số Thẻ:</b> ${infoCustomer.cardNumber}</li>
                              <li><b>Thời Hạn thẻ:</b>${infoCustomer.expmonth}/${infoCustomer.expyear}</li>
                              <li><b>CCV:</b>${infoCustomer.ccv}</li>
                            </ul>
                            <ul>
                            <table id="listProductModal">
                            </table>
                            </ul>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-dark"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td><span>$</span><span id="total">${infoCustomer.total}</span></td>
                  <td>
                    <input
                      type="button"
                      class="btn btn-disable status text-white p-2"
                      style="background-color: red" value="Chờ Xác Nhận" data-id="${index}"
                      ></span
                    >
                  </td>
                  <td class="d-flex justify-content-around">
                    <button type="button" class="btn confirm btn-success" data-id="${index}">
                      Xác nhận
                    </button>
                    <button type="button" class="btn unConfirm btn-success" data-id="${index}">
                      Chờ
                    </button>
                    <button type="button" class="btn btn-danger" data-id="${infoCustomer.id}" id="btnCancel">
                      Huỷ
                    </button>
                  </td>
                </tr>
        `
  );
});
// var htm2 = list.map((item) => {
//   item.product.map((item2) => {
//     listProductModal.insertAdjacentHTML(
//       "afterbegin",
//       `
//       <tr>
//       <td>
//       <p>${item2.title}</p>
//       </td>
//       <td>
//         <div>
//           <input  type="text" class="quantity" value="${
//             item2.value
//           }" disabled/>
//         </div>
//       </td>
//       <td class=" text-center">
//         <span class="text-center fs-4">$</span><span class="total-price-cart text-center fs-4">${
//           item2.price * item2.value
//         }</span>
//       </td>
//     </tr>
//       `
//     )
//   })
// })

} 
  

function products(list){
  list.map((item) => {
    listProductModal.insertAdjacentHTML(
      "afterbegin",
      `
      <li>${item.title}</li>
      `
    )
  })
}

buttonConfirm = () => {
document.querySelectorAll(".confirm").forEach((status) => {
  status.addEventListener("click", (e) => {
    var id = e.target.getAttribute("data-id");
    var z = document.getElementsByClassName("status")[id];
    z.style.backgroundColor  = "green";
    z.setAttribute("value", "Đã Xác Nhận")
  })
})
};

buttonUnConfirm = () => {
  document.querySelectorAll(".unConfirm").forEach((status) => {
    status.addEventListener("click", (e) => {
      var id = e.target.getAttribute("data-id");
      var z = document.getElementsByClassName("status")[id];
      z.style.backgroundColor  = "red";
      z.setAttribute("value", "Chờ Xác Nhận")
    })
  })
  };
  



