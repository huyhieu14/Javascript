var userCurrent = localStorage.getItem("userCurrent") ? (localStorage.getItem("userCurrent")) : "";
var userCurrent2 = localStorage.getItem("userCurrent2") ? (localStorage.getItem("userCurrent2")) : "";

userCurrent ? document.getElementById("nameCurrent").innerHTML = userCurrent : null;
userCurrent2 ? document.getElementById("emailCurrent").innerHTML = userCurrent2 : null;


function myFunction(x) {
    x.classList.toggle("change");
}

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



$("#signIn").click(() => {
    $(".sign-up-hide").hide();

})

$("#signUp").click(() => {
    $(".sign-up-hide").show();
})

function logout() {
    localStorage.setItem("userCurrent", "")
    localStorage.setItem("userCurrent2", "")
}