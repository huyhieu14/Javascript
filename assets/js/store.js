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

var arrProduct = [];
fetch("http://localhost:3000/product")
  .then((res) => res.json())
  .then((data) => {
    arrProduct = [...data];
    card(arrProduct);
    addEventButton();
  });

function card(cards) {
  var html = cards.map((card) => {
    product.insertAdjacentHTML(
      "afterbegin",
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
  return html;
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
  let card = { id, image, title, system, core, vga, ram, storage, price };
  if (carts.some((card) => card.id === id)) {
    console.log("Đã có trong giỏ hàng");
    return;
  }
  carts.push(card);
  localStorage.setItem("carts", JSON.stringify(carts));
};
