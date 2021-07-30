var users = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];
var checkUser = localStorage.getItem("userCurrentAdmin2");
users.map((user, index) => {
  if (user.email == checkUser) {
    displayProfile.insertAdjacentHTML(
      "afterbegin",
      `
                <div class="row row-space" data-id=${index}>
                                <div class="col-6">
                                    <div class="input-group">
                                        <label class="label">Họ</label>
                                        <input class="input--style-4" type="text" name="first_name" value="${user.firstname}" disabled>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group">
                                        <label class="label">Tên</label>
                                        <input class="input--style-4" type="text" name="last_name" value="${user.lastname}" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">
                                <div class="col-6">
                                    <div class="input-group">
                                        <label class="label">Ngày sinh</label>
                                            <input class="input--style-4 js-datepicker" type="text" name="birthday" value="${user.date} / ${user.month} / ${user.year}"  disabled>
                                            <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group">
                                        <label class="label">Tên user</label>    
                                          <input class="input--style-4" type="text" name="Username" value="${user.userName}" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">
                                <div class="col-6">
                                    <div class="input-group">
                                        <label class="label">Email</label>
                                        <input class="input--style-4" type="email" name="email" value="${user.email}" disabled>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group">
                                        <label class="label">Điện thoại</label>
                                        <input class="input--style-4" type="text" name="phone" value="${user.phone}" disabled>
                                    </div>
                                </div>
                            </div>
                `
    );
  }
  if (user.email == checkUser) {
      let curPass = user.password;
    document.querySelectorAll(".btn-update").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let fname = document.getElementById("validationServer01").value;
        let lname = document.getElementById("validationServer02").value;
        let phone = document.getElementById("validationServer03").value;
        let date = document.getElementById("validationServer04").value;
        let month = document.getElementById("validationServer05").value;
        let year = document.getElementById("validationServer06").value;
        let currentPass = document.getElementById("validationServer07").value;
        let newPass = document.getElementById("validationServer08").value;
        let cNewPass = document.getElementById("validationServer09").value;
        console.log(fname);
        console.log(lname);
        console.log(phone);
        console.log(date);
        console.log(index);
        console.log(curPass);
        console.log(phone.length);
        console.log(year.length);
        console.log(currentPass);
        console.log(date) 
        console.log(month);
        console.log(year);
        if (
          fname != "" &&
          lname != "" &&
          phone != "" &&
          date != "" &&
          month != "" &&
          year != "" &&
          currentPass != "" &&
          newPass != "" &&
          cNewPass != ""
        ) {
          if (
            phone.length <= 10 &&
            currentPass == curPass &&
            newPass == cNewPass &&
            date < 31 &&
            date > 1 &&
            month < 12 &&
            month > 1 &&
            year.length <= 4
          ) {
            if (newPass.length > 8){
                var user = {
                    ...users[index],
                    password: newPass,
                    phone: phone,
                    firstname: fname,
                    lastname: lname,
                    date: date,
                    month: month,
                    year: year,
                  };
                  users[index] = user;
                  localStorage.setItem("user", JSON.stringify(users));
                  Swal.fire("Cập nhật thành công!", "Click để xác nhận!", "Ok");
            } else {
                document.getElementById("checkC").innerHTML = "Độ dài mật khẩu phải trên 8 ký tự!";
            }
          } else {
            document.getElementById("checkU").innerHTML =
              "Nhập sai thông tin hoặc mật khẩu không đúng!";
          }
        } else {
          document.getElementById("checkU").innerHTML =
            "Vui lòng nhập đầy đủ thông tin!";
        }
      });
    });
  }
});


