function sliderStore() {
    var indexSlider = 1;
    setInterval(() => {
        document.getElementById("radio" + indexSlider).checked = true;
        indexSlider++;
        console.log(indexSlider);
        if (indexSlider > 6) {
            indexSlider = 1;
        }
    }, 5000);
}
sliderStore();

var arrProduct = [];
fetch("http://localhost:3000/product").then(res => res.json())
    .then(data => {
        arrProduct = [...data],
            card(arrProduct)
    })
console.log(arrProduct)

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
                                <li>${card.system}
                                </li>
                                <li>${card.core}
                                </li>
                                <li>${card.vga}
                                </li>
                                <li>${card.ram}
                                </li>
                                <li>${card.storage}
                                </li>
                            </ul>
                        </div>
                        <div class="mt-3">
                            <span class="float-start fs-4 fw-bold">
                            $${card.price}
                            </span>
                            <a href="#" class="btn float-end">Thêm giỏ hàng </a>
                        </div>
                    </div>
                </div>
            </div>`
        );
    });
    return html;
}

var fillProduct = [];
fetch("http://localhost:3000/product")
.then(res => res.json())
.then(data => {
(fillProduct = [...data]);
    fillProduct(fillProduct);
})
.then (() => {
    var fill = docutemt.querySelectorAll(".")
})