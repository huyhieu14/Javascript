var users = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];
//asodinai0sdn

users.map((users, index) => {
  listAcount.insertAdjacentHTML(
    "beforeend",
    `
        <tr>
            <td>${index}</td>
            <td>${users.userName}</td>
            <td class="d-none d-xl-table-cell">${users.email}</td>
            <td class="d-none d-xl-table-cell">${users.phone}</td>
            <td><input type="button" class="btn btn-checkRole text-white" value="ADMIN"></td>
            <td><input type="button" class="btn btn-danger text-dark btn-delete" data-id=${index} value="XOÁ"> <input type="button" class="btn btn-warning btn-reset" data-id=${index} value="RESET" title="RESET MẬT KHẨU 1->8"></td>
        </tr>
        `
  );
    switch(users.role) {
        case 1: 
            var z = document.getElementsByClassName("btn-checkRole")[index]
            z.style.backgroundColor = "black";
            z.setAttribute("value", "ADMIN");
        break;
        case 0:
            var z = document.getElementsByClassName("btn-checkRole")[index]
            z.style.backgroundColor = "#00DD00";
            z.setAttribute("value", "USER");
        break;
  }
});

function deleteAcount(){
    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.target.parentNode.remove();
            var id = e.target.getAttribute("data-id");
            users.splice(id, 1);
            localStorage.setItem("user", JSON.stringify(users));
            window.location.reload();
        })
    })
}
deleteAcount();

function resetPass(){
    document.querySelectorAll(".btn-reset").forEach(btn => {
        btn.addEventListener("click", (e) => {
            var id = e.target.getAttribute("data-id");
            var user = {
                ...users[id],
                password: 12345678,
            }
            users[id] = user;
            localStorage.setItem("user", JSON.stringify(users))
            Swal.fire("Reset thành công!", "Click để xác nhận!", "Ok");
        }) 
    })
}
resetPass();


