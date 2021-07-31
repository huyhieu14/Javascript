var listProduct = [];
      fetch("http://localhost:3000/product")
        .then((res) => res.json())
        .then((data) => {
          (listProduct = [...data]);
          product(listProduct.slice().reverse());
        })
        .then(() => {
          var z = document.querySelectorAll(".delete-product-button");
          z.forEach((item) => {
            item.addEventListener("click", (e) => {
              var id = e.target.getAttribute("data-id");
              fetch(`http://localhost:3000/product/${id}`, {
                method: "DELETE",
              }).then(() => {
                location.reload();
              });
            });
          });
        });
      function product(list) {
        var html = list.map((product) => {
          productListing.insertAdjacentHTML(
            "afterbegin",
            `
                    <tr>
                        <td >${product.id}</td>
                        <td >
                        <a class="text-dark" href="">${product.title}</a>
                        </td>
                        <td class="d-none d-md-table-cell">$ ${
                          product.price
                        }</td>
                        <td class="d-none d-md-table-cell">
                        <img src=${product.image} class="img-fluid"></img>
                            </td>
                        <td class="d-none d-md-table-cell"></td>
                        <td >
                            <a href=${`./editProduct.html?id=${product.id}`} type="button" class="btn btn-danger">SỬA</a>
                            <button class=" btn btn-danger delete-product-button" data-id="${
                              product.id
                            }">XOÁ</button>
                        </td>
                       
                    </tr>
                    `
          );
        });
      }