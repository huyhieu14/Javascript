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

function sliderHome() {
    var index = 0;
    setInterval(() => {
        $(".img-slide").css("opacity", "0");
        imgslider[index].style.opacity = "1";
        index++;
        if (index == 3) {
            index = 0;
        }
    }, 8000)
}
sliderHome();

window.onscroll = () => {
    stickyHeader();
}
var headerLg = document.getElementsByClassName("header")[0];
var sticky = headerLg.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        headerLg.classList.add("sticky");
    } else {
        headerLg.classList.remove("sticky");
    }
}

function changeImg() {
    document.getElementById("imgActivity").src = "https://storage-asset.msi.com/frontend/imgs/Widget_MSIOLOGY.png"
}

function recoveryImg() {
    document.getElementById("imgActivity").src = "https://storage-asset.msi.com/frontend/imgs/Widget_TIAMAT.png"
}

var windowW = window.innerHeight - 700;

function moveTopImg() {
    $("#activity").animate({ top: "-=" + windowW }, 1200, moveBotImg)
}

function moveBotImg() {
    $("#activity").animate({ top: "+=" + windowW }, 1200, moveTopImg)
}

$(document).ready(function() {
    moveTopImg();
});