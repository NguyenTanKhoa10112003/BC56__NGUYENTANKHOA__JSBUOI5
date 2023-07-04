function chonLoaiKhachHang() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var soKenhKetNoi = document.getElementById("formsoKetNoi");
  if (loaiKhachHang == "doanhNghiep") {
    soKenhKetNoi.style.display = "block";
  } else {
    soKenhKetNoi.style.display = "none";
  }
}
function tinhTienNhaDan(soKenhCaoCap) {
  var phiXuLyHoaDon = 4.5;
  var phiDichVuCoBan = 20.5;
  var phiThueKenhCaoCap = soKenhCaoCap * 7.5;
  var tongTienNhaDan = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
  return tongTienNhaDan;
}
function tinhTienDoanhNghiep(soKenhCaoCap, soKetNoi) {
  var phiXuLyHoaDon = 15;
  if (soKetNoi <= 10) {
    var phiDichVuCoBan = soKetNoi * 75;
  } else {
    var phiDichVuCoBan = soKetNoi * 80;
  }
  var phiThueKenhCaoCap = soKenhCaoCap * 50;
  var tongTienDoanhNghiep = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
  return tongTienDoanhNghiep;
}
function tinhTienCap() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var maKhachHang = document.getElementById("maKhachHang").value;
  var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  var tongTienCap = 0;
  if (loaiKhachHang == "nhaDan") {
    tongTienCap = tinhTienNhaDan(soKenhCaoCap);
  } else {
    tongTienCap = tinhTienDoanhNghiep(soKenhCaoCap, soKetNoi);
  }
  document.getElementById(
    "result"
  ).innerHTML = `<p>Mã khách hàng là: ${maKhachHang}; Tiền cáp: $${tongTienCap.toLocaleString()}</p>`;
}
