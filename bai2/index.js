function tinhTienDien() {
  var hoTen = document.getElementById("hoTen").value;
  console.log("🚀 ~ file: index.js:3 ~ tinhTienDien ~ hoTen:", hoTen)
  var soKw = document.getElementById("soKw").value * 1;
  var tongTien = 0;
  if (soKw <= 50) {
    tongTien = Kw50dau(soKw);
  } else if (soKw <= 100) {
    tongTien = kw50den100(soKw);
  } else if (soKw <= 200) {
    tongTien = kw100den200(soKw);
  } else if (soKw <= 350) {
    tongTien = kw200den350(soKw);
  } else {
    tongTien = tren350kw(soKw);
  }
  console.log(tongTien);
}
function Kw50dau(soKw) {
  var kw50dau = soKw * 500;
  return kw50dau;
}
function kw50den100(soKw) {
  var kw50den100 = 50 * 500 + (soKw - 50) * 650;
  return kw50den100;
}
function kw100den200(soKw) {
  var kw100den150 = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  return kw100den150;
}
function kw200den350(soKw) {
  var kw200den350 = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  return kw200den350;
}
function tren350kw(soKw) {
  var tren350kw =
    50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  return tren350kw;
}
