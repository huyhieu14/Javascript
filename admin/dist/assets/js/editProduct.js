const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  const id = getParameterByName("id");

  var productList = [];

  fetch(`http://localhost:3000/product/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      product(data);
    })
    .then(() => {
      document
        .querySelector(".edit-product-button")
        .addEventListener("click", (e) => {
          const product_title =
            document.getElementById("product-title").value;
          const product_system =
            document.getElementById("product-system").value;
          const product_core =
            document.getElementById("product-core").value;
          const product_vga = document.getElementById("product-vga").value;
          const product_ram = document.getElementById("product-ram").value;
          const product_storage =
            document.getElementById("product-storage").value;
          const product_image =
            document.getElementById("product-image").value;
          const product_price =
            document.getElementById("product-price").value;

          const data = {
            title: product_title,
            system: product_system,
            core: product_core,
            vga: product_vga,
            ram: product_ram,
            storage: product_storage,
            image: product_image,
            price: product_price,
          };

          const option = {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(data),
          };

          fetch(`http://localhost:3000/product/${id}`, option).then(() => {
            window.location.href =
              "http://127.0.0.1:5500/admin/dist/listProduct.html";
          });
        });
    });

  function product(data) {
    editProduct.insertAdjacentHTML(
      "beforeend",
      `
                <div class="card-body">
                  <div class="form-row">
                    <div class="col-md-12 mb-3">
                      <label for="validationServer01">Tên sản phẩm</label>
                      <input
                        type="text"
                        value="${data.title}"
                        name="title"
                        id="product-title"
                        class=" form-control"
                        id="validationServer01"
                        placeholder="Name Product"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="validationServer01">Hệ điều hành</label>
                      <input
                        type="text"
                        value="${data.system}"
                        name="system"
                        id="product-system"
                        class=" form-control"
                        id="validationServer01"
                        placeholder="System"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="validationServer01">Vi xử lý</label>
                      <input
                        type="text"
                        value="${data.core}"
                        name="core"
                        id="product-core"
                        class=" form-control"
                        id="validationServer01"
                        placeholder="Intel..."
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="validationServer01">Vga</label>
                      <input
                        type="text"
                        value="${data.vga}"
                        name="vga"
                        id="product-vga"
                        class=" form-control"
                        id="validationServer01"
                        placeholder="Vga"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="validationServer01">Ram</label>
                      <input
                        type="text"
                        value="${data.ram}"
                        name="ram"
                        id="product-ram"
                        class=" form-control"
                        id="validationServer01"
                        placeholder="Ram"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="validationServer01">Ổ cứng</label>
                      <input
                        type="text"
                        value="${data.storage}"
                        name="storage"
                        id="product-storage"
                        class=" form-control"
                        id="validationServer01"
                        placeholder="Storage"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="validationServer01">url image</label>
                      <input
                        type="text"
                        value="${data.image}"
                        name="image"
                        id="product-image"
                        class=" form-control"
                        id="validationServer01"
                        placeholder="url"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="validationServer01">Giá</label>
                      <input
                        type="text"
                        value="${data.price}"
                        name="price"
                        id="product-price"
                        class=" form-control"
                        id="validationServer01"
                        placeholder="Price"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                  <button class="btn btn-dark edit-product-button" type="submit">
                    Lưu
                  </button>
                </form>
              </div>
                `
    );
  }