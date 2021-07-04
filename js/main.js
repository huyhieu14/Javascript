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

document.getElementById("slide1").addEventListener("click", () => {
    document.getElementById("imgSlide").src = "https://storage-asset.msi.com/global/picture/banner/banner_1619658851edf92d0b3ccb5fede42e9ec83b6718c7.jpeg", 2000;
})
document.getElementById("slide2").addEventListener("click", () => {
    document.getElementById("imgSlide").src = "https://storage-asset.msi.com/global/picture/banner/banner_16206347303e39b75d3193bff1c9e44bd51d426986.jpeg"
})
document.getElementById("slide3").addEventListener("click", () => {
    document.getElementById("imgSlide").src = "https://storage-asset.msi.com/global/picture/banner/banner_1625037084a14b7f3fa3daec659905c713b7a92522.jpeg"
})