var users = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];
var checkUser = localStorage.getItem("userCurrent2");
console.log(checkUser);
users.map((user) => {
    if(user.email == checkUser){
        info.insertAdjacentHTML(
            "afterbegin",
            `
                  <div class="left">
                  <img src="https://cdn.worldvectorlogo.com/logos/msi-gaming.svg" class="img-fluid">
                        <h4>${user.userName}</h4>
                        <p>User</p>
                      </div>
                      <div class="right">
                        <div class="info">
                          <h3>Thông tin</h3>
                          <div class="info_data">
                            <div class="data w-100">
                              <h4>Name</h4>
                              <p>${user.firstname} ${user.lastname}</p>
                            </div>
                          </div>
                          <div class="info_data">
                            <div class="data w-100">
                              <h4>Email</h4>
                              <p>${user.email}</p>
                            </div>
                          </div>
                          <div class="info_data">
                              <div class="data">
                                <h4>Ngày sinh</h4>
                                <p>${user.date} / ${user.month} / ${user.year}</p>
                              </div>
                              <div class="data">
                                  <h4>Số điện thoại</h4>
                                  <p>${user.phone}</p>
                                </div>
                          </div>
                          <div>
                              <button type="button" class="btn btn-danger"  data-toggle="modal" data-target="#exampleModal">Thay đổi / cập nhật thông tin</button>
                          </div>
                          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                              <div class="modal-content">
                              <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Cập nhật thông tin</h5>
                                  <button type="button" class="close btn" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                  </button>
                              </div>
                              <div class="modal-body" id="updateProfile">
                                 
                              </div>
                              </div>
                          </div>
                          </div>
                        </div>
                        <div class="projects">
                          <h3>Password</h3>
                          <div class="projects_data">
                            <div class="data">
                              <label for="">Nhập mật khẩu cũ</label>
                              <input type="password" class="border form-control" id="validationServer07"/>
                            </div>
                          </div>
                          <div class="projects_data">
                            <div class="data">
                              <label for="">Nhập mật khẩu mới</label>
                              <input type="password" class="border form-control"   id="validationServer08"/>
                            </div>
                            <div class="data">
                              <label for="">Nhập lại mật khẩu mới</label>
                              <input type="password" class="border form-control"  id="validationServer09"/>
                            </div>
                          </div>
                          <span id="checkU2"></span>
                          <div class="mt-3">
                              <button type="button" class="btn btn-danger btn-changePass">Thay đổi mật khẩu</button>
                          </div>
                          
                        </div>
                        <div class="social_media">
                          <ul class="p-0">
                            <li>
                              <a href="#"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                              <a href="#"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li>
                              <a href="#"><i class="fab fa-instagram"></i></a>
                            </li>
                          </ul>
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
                                  <div class="col-md-12 mb-3">
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
                                  <div class="row">
                                  <div class="col-md-4 mb-3">
                                    <label for="validationServer04">Ngày sinh</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationServer04"
                                      placeholder=""
                                      required
                                      value="${user.date}"
                                    />
                                  </div>
                                  <div class="col-md-4 mb-3">
                                    <label for="validationServer05">Tháng sinh</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationServer05"
                                      placeholder=""
                                      required
                                      value="${user.month}"
                                    />
                                  </div>
                                  <div class="col-md-4 mb-3">
                                    <label for="validationServer06">Năm sinh</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="validationServer06"
                                      placeholder=""
                                      required
                                      value="${user.year}"
                                    />
                                  </div>
                                  </div>
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
    document.querySelectorAll(".btn-update").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let fname = document.getElementById("validationServer01").value;
        let lname = document.getElementById("validationServer02").value;
        let phone = document.getElementById("validationServer03").value;
        let date = document.getElementById("validationServer04").value;
        let month = document.getElementById("validationServer05").value;
        let year = document.getElementById("validationServer06").value;
        if (
          fname != "" &&
          lname != "" &&
          phone != "" &&
          date != "" &&
          month != "" &&
          year != ""
        ) {
          if (
            phone.length <= 10 &&
            date < 31 &&
            date > 1 &&
            month < 12 &&
            month > 1 &&
            year.length <= 4
          ) {
            var user = {
              ...users[index],
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
          }
        } else {
          document.getElementById("checkU").innerHTML =
            "Vui lòng nhập đầy đủ thông tin!";
        }
      });
    });
  }
  if (user.email == checkUser) {
    let curPass = user.password;
    document.querySelectorAll(".btn-changePass").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let currentPass = document.getElementById("validationServer07").value;
        let newPass = document.getElementById("validationServer08").value;
        let cNewPass = document.getElementById("validationServer09").value;
        if (
          currentPass != "" &&
          newPass != "" &&
          cNewPass != ""
        ) {
          if (
            currentPass == curPass &&
            newPass == cNewPass
          ) {
            if (newPass.length >= 8) {
              var user = {
                ...users[index],
                password: newPass,
              };
              users[index] = user;
              localStorage.setItem("user", JSON.stringify(users));
              Swal.fire("Thay đổi mật khẩu thành công!", "Click để xác nhận!", "Ok");
            } else {
              document.getElementById("checkU2").innerHTML =
                "Độ dài mật khẩu phải trên 8 ký tự!";
            }
          } else {
            document.getElementById("checkU2").innerHTML =
              "Nhập mật khẩu không đúng!";
          }
        } else {
          document.getElementById("checkU2").innerHTML =
            "Vui lòng nhập đầy đủ thông tin!";
        }
      });
    });
  }
});
