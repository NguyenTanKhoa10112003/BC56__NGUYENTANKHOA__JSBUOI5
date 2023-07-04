function tinhPhiThue(tongThuNhap, soNguoiPhuThuoc) {
  var phiThue = 0;
  if (tongThuNhap <= 60 * 10 ** 6) {
    phiThue =
      (tongThuNhap - 4 * 10 ** 6 - soNguoiPhuThuoc * 1.6 * 10 ** 6) * 0.05;
  } else if (tongThuNhap <= 120 * 10 ** 6) {
    phiThue =
      (tongThuNhap - 4 * 10 ** 6 - soNguoiPhuThuoc * 1.6 * 10 ** 6) * 0.1;
  } else if (tongThuNhap <= 210 * 10 ** 6) {
    phiThue =
      (tongThuNhap - 4 * 10 ** 6 - soNguoiPhuThuoc * 1.6 * 10 ** 6) * 0.15;
  } else if (tongThuNhap <= 384 * 10 ** 6) {
    phiThue =
      (tongThuNhap - 4 * 10 ** 6 - soNguoiPhuThuoc * 1.6 * 10 ** 6) * 0.2;
  } else if (tongThuNhap <= 624 * 10 ** 6) {
    phiThue =
      (tongThuNhap - 4 * 10 ** 6 - soNguoiPhuThuoc * 1.6 * 10 ** 6) * 0.25;
  } else if (tongThuNhap <= 960 * 10 ** 6) {
    phiThue =
      (tongThuNhap - 4 * 10 ** 6 - soNguoiPhuThuoc * 1.6 * 10 ** 6) * 0.3;
  } else {
    phiThue =
      (tongThuNhap - 4 * 10 ** 6 - soNguoiPhuThuoc * 1.6 * 10 ** 6) * 0.35;
  }
  return phiThue;
}

function tinhTienThue() {
  var hoTen = document.getElementById("hoTen").value;
  var tongThuNhap = document.getElementById("tongThunhap").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  var tongTienThue = tinhPhiThue(tongThuNhap, soNguoiPhuThuoc);
  document.getElementById(
    "result"
  ).innerHTML = `<p>Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${tongTienThue.toLocaleString()} VND</p>`;
}
