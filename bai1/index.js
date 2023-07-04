function diemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}
function doiCaNhan(doiTuong) {
  switch (doiTuong) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    default:
      return 0;
  }
}

function tinhDiem() {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var khuVuc = document.getElementById("khuVuc").value; // Lấy giá trị đã chọn
    var doiTuong = document.getElementById("doiTuong").value; // Lấy giá trị đã chọn
  
    var monThu1 = document.getElementById("monThu1").value * 1;
    var monThu2 = document.getElementById("monThu2").value * 1;
    var monThu3 = document.getElementById("monThu3").value * 1;
    var diemVung = diemKhuVuc(khuVuc);
    var diemCaNhan = doiCaNhan(doiTuong);
    var tongDiem3Mon = monThu1 + monThu2 + monThu3 + diemVung + diemCaNhan;
  
    var xepLoai = "";
  
    if (tongDiem3Mon >= diemChuan) {
      xepLoai = "Đậu";
    } else {
      xepLoai = "Rớt";
    }
    if (monThu1 <= 0 || monThu2 <= 0 || monThu3 <= 0) {
      xepLoai = "Rớt";
    }
   document.getElementById("result").innerHTML=`<p>Kết quả: ${xepLoai}; Tổng điểm là:${tongDiem3Mon}</p>`
  }
  
