$('#header').load('./../Header.html')

// $("button").click(function(){
//     $.ajax({url: "demo_test.txt", success: function(result){
//       $("#div1").html(result);
//     }});
//   });
function myFunction(x) {
    x.classList.toggle("change");
}

function showSearchBar() {
    document.getElementById("loupeicon").style.width = "7%";
    document.getElementById("loupeicon").style.zIndex = "99";
    document.getElementById("loupeicon").style.position = "absolute";
    document.getElementById("loupeicon").style.backgroundColor = "white";
}

function hideSearchBar() {
    document.getElementById("loupeicon").style.width = "";
    document.getElementById("loupeicon").style.zIndex = "";
    document.getElementById("loupeicon").style.position = "";
    document.getElementById("loupeicon").style.backgroundColor = "";
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
}, 3000)