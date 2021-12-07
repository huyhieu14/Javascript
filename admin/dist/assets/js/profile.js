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
  
});


users.map((user, index) => {
  if (user.email == checkUser) {
    updateProfile.insertAdjacentHTML(
      "afterbegin",
      `
      <form>
                              <div class="form-row">
                                <div class="col-md-12 mb-3">
                                  <label for="validationServer01"
                                    >Họ</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationServer01"
                                    placeholder="First name"
                                    value="${user.firstname}"
                                    required
                                  />
                                  
                                </div>
                                <div class="col-md-12 mb-3">
                                  <label for="validationServer02"
                                    >Tên</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationServer02"
                                    placeholder="Last name"
                                    value="${user.lastname}"
                                    required
                                  />
                                 
                                </div>
                                <div class="col-md-12 mb-3">
                                  <label for="validationServerUsername"
                                    >Username</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationServerUsername"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend3"
                                    disabled
                                    value="${user.userName}"
                                  />
                                </div>
                              </div>
                              
                              <div class="form-row">
                                <div class="col-md-3 mb-3">
                                  <label for="validationServer03">Số điện thoại</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationServer03"
                                    placeholder="+84..."
                                    required
                                    value="${user.phone}"
                                  />
                                </div>
                                <div class="col-md-3 mb-3">
                                  <label for="validationServer04">Ngày sinh</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationServer04"
                                    placeholder="14"
                                    required
                                    value="${user.date}"
                                  />
                                </div>
                                <div class="col-md-3 mb-3">
                                  <label for="validationServer05">Tháng sinh</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationServer05"
                                    placeholder="08"
                                    required
                                    value="${user.month}"
                                  />
                                </div>
                                <div class="col-md-3 mb-3">
                                  <label for="validationServer06">Năm sinh</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="validationServer06"
                                    placeholder="2002"
                                    required
                                    value="${user.year}"
                                  />
                                </div>
                                <div class="col-md-3 mb-3">
                                  <label for="validationServer07">Mật khẩu cũ</label>
                                  <input
                                    type="password"
                                    class="form-control"
                                    id="validationServer07"
                                    placeholder="CurrenPass"
                                    required
                                  />
                                </div>
                                <div class="col-md-3 mb-3">
                                  <label for="validationServer08">Mật khẩu mới</label>
                                  <input
                                    type="password"
                                    class="form-control"
                                    id="validationServer08"
                                    placeholder="New Pass"
                                    required
                                  />
                                  <div>
                                    <span id="checkC"></span>
                                  </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                  <label for="validationServer09">Nhập lại mật khẩu mới</label>
                                  <input
                                    type="password"
                                    class="form-control"
                                    id="validationServer09"
                                    placeholder="Comfirm Pass"
                                    required
                                  />
                                </div>
                                
                              </div>
                              <div>
                                <span id="checkU"></span>
                              </div>
                              <button class="btn btn-dark btn-update" type="button">
                                Cập nhật
                              </button>
                            </form>
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
        console.log(date);
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
            if (newPass.length >= 8) {
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
              document.getElementById("checkC").innerHTML =
                "Độ dài mật khẩu phải trên 8 ký tự!";
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