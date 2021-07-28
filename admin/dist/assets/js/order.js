var carts = JSON.parse(localStorage.getItem("carts") || []);
var total = localStorage.getItem("finalPayment");
var informations = [];
fetch("http://localhost:3000/Oder")
.then((res) => res.json())
.then((data) => {
  informations = [...data];
  info(informations);
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
var html = list.map((infoCustomer) => {
  orderListing.insertAdjacentHTML(
    "afterbegin",
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
                              <li><b>Zipcode:</b>${infoCustomer.zip}</li>
                              <li><hr /></li>
                              <li><b>Thông tin thanh toán</b></li>
                              <li>
                                <b>Tên Chủ Thẻ:</b> ${infoCustomer.cardName}
                              </li>
                              <li><b>Số Thẻ:</b> ${infoCustomer.cardNumber}</li>
                              <li><b>Thời Hạn thẻ:</b>${infoCustomer.expmonth}/${infoCustomer.expyear}</li>
                              <li><b>CCV:</b>${infoCustomer.ccv}</li>
                            </ul>
                            <ul id="listProductModal">
                                
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
                    <span
                      type="text"
                      class="status text-white p-2"
                      style="background-color: red"
                      >Chờ Xác Nhận</span
                    >
                  </td>
                  <td class="d-flex justify-content-around">
                    <button type="button" class="btn btn-success">
                      Xác nhận
                    </button>
                    <button type="button" class="btn btn-danger" data-id="${infoCustomer.id}" id="btnCancel">
                      Huỷ
                    </button>
                  </td>
                </tr>
        `
  );
});
}   