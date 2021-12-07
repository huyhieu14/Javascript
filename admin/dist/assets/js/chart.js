var arrProduct = [];
fetch("http://localhost:3000/product")
.then((res) => res.json())
.then((data) => {
  var PC= 0, Laptop=0, vga=0, main=0, monitor=0, gear=0, other=0;
  arrProduct = [...data].reverse();
  arrProduct.map((item) => {
    if (item.category == "PC") {
      PC++;
    } else if (item.category == "Laptop") {
      Laptop++;
    } else if (item.category == "VGA") {
      vga++;
    } else if (item.category == "Mainboard") {
      main++;
    } else if (item.category == "Màn Hình") {
      monitor++;
    } else if (item.category == "Gear") {
      gear++;
    } else if (item.category == "Other") {
      other++;
    }
  });
  var PercentPC = (PC/arrProduct.length) * 100;
  var PercentLaptop = (Laptop/arrProduct.length) * 100
  var PercentVGA = (vga / arrProduct.length) * 100
  var PercentMain = (main / arrProduct.length) * 100
  var PercentMonitor = (monitor / arrProduct.length) * 100
  var PercentGear = (gear / arrProduct.length) * 100
  var PercentOther = (other / arrProduct.length) * 100
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2", 
      exportEnablFed: true,
      animationEnabled: true,
      title: {
        text: "Số lượng mặt hàng có trên hệ thống",
      },
      data: [
        {
          type: "pie",
          startAngle: 25,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: PercentLaptop, label: "Laptop" },
            { y: PercentPC, label: "PC" },
            { y: PercentVGA, label: "Card Màn Hình" },
            { y: PercentGear, label: "Gaming Gear" },
            { y: PercentMonitor, label: "Màn Hình" },
            { y: PercentMain, label: "Bo Mạch Chủ" },
            { y: PercentOther, label: "Others" },
          ], 
        },
      ],
    });
    chart.render();
  };
  document.getElementById("laptop").innerHTML = Laptop;
  document.getElementById("pc").innerHTML = PC;
  document.getElementById("vga").innerHTML = vga;
  document.getElementById("gear").innerHTML = gear;
  document.getElementById("main").innerHTML = main;
  document.getElementById("other").innerHTML = other;
  document.getElementById("monitor").innerHTML = monitor;
  document.getElementById("sum").innerHTML = monitor + other + main + gear + vga + PC + Laptop;
});


