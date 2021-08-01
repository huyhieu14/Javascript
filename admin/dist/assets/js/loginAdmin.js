var listAccountAdmin = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];
var userCurrentAdmin = localStorage.getItem("userCurrentAdmin")
  ? localStorage.getItem("userCurrentAdmin")
  : "";
var userCurrentAdmin2 = localStorage.getItem("userCurrentAdmin2")
  ? localStorage.getItem("userCurrentAdmin2")
  : "";

userCurrentAdmin
  ? (document.getElementById("nameCurrentAdmin").innerHTML = userCurrentAdmin)
  : null;
userCurrentAdmin2
  ? (document.getElementById("emailCurrentAdmin").innerHTML = userCurrentAdmin2)
  : null;
userCurrentAdmin
  ? (document.getElementById("nameCurrentAdmin2").innerHTML = userCurrentAdmin)
  : null;
userCurrentAdmin2
  ? (document.getElementById("emailCurrentAdmin2").innerHTML =
      userCurrentAdmin2)
  : null;
// userCurrentAdmin2
//   ? (document.getElementById("emailCurrentAdmin3").innerHTML =
//       userCurrentAdmin2)
//   : null;

function checkLoginAdmin() {
  var cEmailLogin = document.getElementById("emailLogin").value;
  var cPassLogin = document.getElementById("passLogin").value;
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    String(cEmailLogin).toLowerCase()
  );
  if (cEmailLogin != "" || cPassLogin != "" || cEmailLogin.match(emailFormat)) {
    listAccountAdmin.forEach((user) => {
      if (
        user.email == cEmailLogin &&
        user.password == cPassLogin &&
        user.role == 1
      ) {
        Swal.fire("Đăng nhập thành công!", "Click để trở về admin!", "Ok");
        localStorage.setItem("userCurrentAdmin", user.userName);
        localStorage.setItem("userCurrentAdmin2", user.email);
        loginD.setAttribute("href", "/admin/dist/index.html");
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
  var cNameRegister = document.getElementById("cNameRegister").value;
  var cEmailRegister = document.getElementById("cEmailRegister").value;
  var cPassRegister = document.getElementById("cPassRegister").value;
  var cPassRegisterC = document.getElementById("cPassRegisterC").value;
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    String(cEmailRegister).toLowerCase()
  );

  if (
    cNameRegister != "" ||
    cEmailRegister != "" ||
    cPassRegister != "" ||
    cPassRegisterC != "" ||
    cEmailRegister.match(emailFormat)
  ) {
    if (listAccountAdmin.some((user) => user.email === cEmailRegister)) {
      document.getElementById("checkError2").innerHTML =
        "Tài khoản đã tồn tại!";
      return;
    } else {
      if (cPassRegister != cPassRegisterC) {
        document.getElementById("checkError2").innerHTML =
          "Xác nhận mật khẩu không đúng!";
      } else {
        var user = {
          userName: cNameRegister,
          email: cEmailRegister,
          password: cPassRegister,
          role: 1,
          phone: "",
          firstname: "",
          lastname: "",
          date: "",
          month: "",
          year: "",
          
        };
        listAccountAdmin.push(user);
        localStorage.setItem("user", JSON.stringify(listAccountAdmin));
        Swal.fire("THÊM THÀNH CÔNG!", "Click ok để xác nhận!", "Ok");
      }
    }
  } else {
    document.getElementById("checkError2").innerHTML =
      "Vui lòng nhập đúng định dạng!";
  }
}

function logout() {
  localStorage.setItem("userCurrentAdmin", "");
  localStorage.setItem("userCurrentAdmin2", "");
}
