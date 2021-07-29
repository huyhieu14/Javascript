var listAccount = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];

function checkLogin() {
  var cEmailLogin = document.getElementById("emailLogin").value;
  var cPassLogin = document.getElementById("passLogin").value;
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    String(cEmailLogin).toLowerCase()
  );
  if (cEmailLogin != "" || cPassLogin != "" || cEmailLogin.match(emailFormat)) {
    listAccount.forEach((user) => {
      if (
        user.email == cEmailLogin &&
        user.password == cPassLogin &&
        user.role == 0
      ) {
        Swal.fire("Good job!", "You clicked the button!", "success");
        localStorage.setItem("userCurrent", user.userName);
        localStorage.setItem("userCurrent2", user.email);
        loginC.setAttribute("href", "../../index.html");
        return;
      }
    });
    document.getElementById("checkError").innerHTML =
      "Bạn đã nhập sai thông tin vui lòng nhập lại!";
  } else {
    document.getElementById("checkError").innerHTML =
      "Vui lòng nhập đúng định dạng!";
  }
}

function checkRegister() {
  var cNameRegister = document.getElementById("name").value;
  var cEmailRegister = document.getElementById("emailRegister").value;
  var cPassRegister = document.getElementById("passRegister").value;
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    String(cEmailRegister).toLowerCase()
  );

  if (
    cNameRegister != "" ||
    cEmailRegister != "" ||
    cPassRegister != "" ||
    cEmailRegister.match(emailFormat)
  ) {
    if (listAccount.some((user) => user.email === cEmailRegister)) {
      document.getElementById("checkError2").innerHTML =
        "Tài khoản đã tồn tại!";
      return;
    } else {
      var user = {
        userName: cNameRegister,
        email: cEmailRegister,
        password: cPassRegister,
        role: 0,
        phone: "",
        firstname: "",
        lastname: "",
      };
      listAccount.push(user);
      localStorage.setItem("user", JSON.stringify(listAccount));
      Swal.fire("ĐĂNG KÝ THÀNH CÔNG!", "Click ok để xác nhận!", "Ok");
    }
  } else {
    document.getElementById("checkError2").innerHTML =
      "Vui lòng nhập đúng định dạng!";
  }
}

function updateUserAcount() {}

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
