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