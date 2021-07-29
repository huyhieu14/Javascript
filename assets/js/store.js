var carts = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts"))
  : [];
  
function sliderStore() {
  var indexSlider = 1;
  setInterval(() => {
    document.getElementById("radio" + indexSlider).checked = true;
    indexSlider++;
    if (indexSlider > 6) {
      indexSlider = 1;
    }
  }, 5000);
}
sliderStore();

const getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

const page = getParameterByName("page") || 1;
var arrProduct = [];
fetch("http://localhost:3000/product")
  .then((res) => res.json())
  .then((data) => {
    arrProduct = [...data].reverse();
    var perPage = 8;
    var start = (page - 1) * perPage;
    var end = page * perPage;
    var totalPages = Math.ceil(arrProduct.length / perPage);
    var tempArr = [];
    for (let i = 1; i <= totalPages; i++) {
      tempArr[i] = i;
    }
    arrProduct.slice(start, end).map((card) => {
      product.insertAdjacentHTML(
        "beforeend",
        `
                    <div class="col-xl-3 col-md-6 mt-3">
                        <div class="card">
                            <img class="card-img-top align-self-center" src=${card.image} alt="Card image cap" style="width: 160px; height: 160px;">
                            <div class="card-body">
                                <h5 class="card-title border-bottom fw-bold">${card.title}</h5>
                                <div class="card-text border-bottom">
                                    <ul>
                                        <li class="card-system">${card.system}
                                        </li>
                                        <li class="card-core">${card.core}
                                        </li>
                                        <li class="card-vga">${card.vga}
                                        </li>
                                        <li class="card-ram">${card.ram}
                                        </li>
                                        <li class="card-storage">${card.storage}
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-3">
                                    <span class="float-start fs-4 fw-bold">
                                    $<span class="card-price">${card.price}</span>
                                    </span>
                                    <button data-id=${card.id} class="btn btn-add float-end">Thêm giỏ hàng </button>
                                </div>
                            </div>
                        </div>
                    </div>`
      );
    });
    tempArr.map((item) => {
      pagination.insertAdjacentHTML(
        "beforeend",
        `
                  <li class="page-item pagination-button">
                    <a class="page-link" href="../html/store_main.html?page=${item}" >
                    ${item}
                    </a>
                    </li>
                  `
      );
    });
    addEventButton();
});

function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
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

const addEventButton = () => {
  let button = document.getElementsByClassName("btn-add");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", addProduct);
  }
};

const addProduct = (e) => {
  let parent = e.target.parentElement.parentElement.parentElement.parentElement;
  let id = e.target.getAttribute("data-id");
  let image = parent.getElementsByClassName("card-img-top")[0].src;
  let title = parent.getElementsByClassName("card-title")[0].innerText;
  let system = parent.getElementsByClassName("card-system")[0].innerText;
  let core = parent.getElementsByClassName("card-core")[0].innerText;
  let vga = parent.getElementsByClassName("card-vga")[0].innerText;
  let ram = parent.getElementsByClassName("card-ram")[0].innerText;
  let storage = parent.getElementsByClassName("card-storage")[0].innerText;
  let price = parent.getElementsByClassName("card-price")[0].innerText;
  let total = price;
  let value = 1;
  let card = {
    id,
    image,
    title,
    system,
    core,
    vga,
    ram,
    storage,
    price,
    total,
    value,
  };
  if (carts.some((card) => card.id === id)) {
    console.log("Đã có trong giỏ hàng");
    return;
  }
  carts.push(card);
  localStorage.setItem("carts", JSON.stringify(carts));
};
