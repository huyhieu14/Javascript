var infoCustomers = localStorage.getItem("infoCustomers")
  ? JSON.parse(localStorage.getItem("infoCustomers"))
  : [];

document.getElementById("btn-check").addEventListener("click", () => {
    console.log(123);
        let id;
        let fullName = document.getElementById("fname").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("adr").value;
        let city = document.getElementById("city").value;
        let state = document.getElementById("state").value;
        let zip = document.getElementById("zip").value;
        let cardName = document.getElementById("cname").value;
        let cardNumber = document.getElementById("ccnum").value;
        let expmonth = document.getElementById("expmonth").value;
        let expyear = document.getElementById("expyear").value;
        let ccv = document.getElementById("cvv").value;
        let infoCustomer = {
          id,
          fullName,
          email,
          address,
          city,
          state,
          zip,
          cardName,
          cardNumber,
          expmonth,
          expyear,
          ccv,
        };
        if (
          infoCustomers.some((infoCustomer) => infoCustomer.fullName === fullName)
        ) {
          console.log("Đã có thông tin thanh toán");
          return;
        }
        infoCustomers.push(infoCustomer);
        localStorage.setItem("infoCustomers", JSON.stringify(infoCustomers));
});


