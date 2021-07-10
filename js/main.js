function myFunction(x) {
    x.classList.toggle("change");
}

var imgslider = document.getElementsByClassName("img-slide");
document.getElementById("slide1").addEventListener("click", () => {
    $(".img-slide").css("opacity", "0");
    imgslider[0].style.opacity = "1";
})
document.getElementById("slide2").addEventListener("click", () => {
    $(".img-slide").css("opacity", "0");
    imgslider[1].style.opacity = "1";
})
document.getElementById("slide3").addEventListener("click", () => {
    $(".img-slide").css("opacity", "0");
    imgslider[2].style.opacity = "1";
})
var index = 0;
setInterval(() => {
        $(".img-slide").css("opacity", "0");
        imgslider[index].style.opacity = "1";
        index++;
        if (index == 3) {
            index = 0;
        }
    }, 5000) //Set time