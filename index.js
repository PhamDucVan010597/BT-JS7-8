var arrHienThi = [];
document.querySelector("#themSo").onclick = function () {
  var arrInput = "";
  var input = +document.querySelector("#input").value;
  arrHienThi.push(input);
  arrInput += arrHienThi + " ,";
  document.querySelector("#duLieuNhap").innerHTML = arrInput;
};

// Tính tổng dương
document.querySelector("#tinhTong").onclick = function () {
  var tongDuong = 0;
  for (var i = 0; i < arrHienThi.length; i++) {
    if (arrHienThi[i] > 0) {
      tongDuong += arrHienThi[i];
    }
  }
  document.querySelector("#ketqua1").innerHTML = tongDuong;
};

// Đếm số dương
document.querySelector("#demSoDuong").onclick = function () {
  var demDuong = 0;
  for (var i = 0; i <= arrHienThi.length; i++)
    if (arrHienThi[i] > 0) {
      demDuong++;
    }
  document.querySelector("#ketqua2").innerHTML = demDuong;
};

// Tìm min nhỏ nhất
document.querySelector("#timMin").onclick = function () {
  var min = arrHienThi[0];
  for (var i = 0; i < arrHienThi.length; i++)
    if (min > arrHienThi[i]) {
      min = arrHienThi[i];
    }
  document.querySelector("#ketqua3").innerHTML = min;
};

// Tìm min dương
document.querySelector("#timMinDuong").onclick = function () {
  var minDuong = arrHienThi[0];
  for (var i = 0; i < arrHienThi.length; i++)
    if (arrHienThi[i] < minDuong && arrHienThi[i] > 0) {
      minDuong = arrHienThi[i];
    }
  document.querySelector("#ketqua4").innerHTML = minDuong;
};

// Tìm số chẵn cuối cùng
document.querySelector("#soChanCuoiCung").onclick = function () {
  var soChanCuoiCung = 0;
  for (var i = 0; i < arrHienThi.length; i++)
    if (arrHienThi[i] % 2 == 0) {
      soChanCuoiCung = arrHienThi[i];
    }
  document.querySelector("#ketqua5").innerHTML = soChanCuoiCung;
};

// Đổi chỗ
document.querySelector("#doiCho").onclick = function () {
  var viTriThuNhat = +document.querySelector("#viTriThuNhat").value;
  var viTriThuHai = +document.querySelector("#viTriThuHai").value;
  var k = 0;
  for (var i = 0; i < arrHienThi.length; i++)
    if (viTriThuNhat == i) {
      k = arrHienThi[i];
      arrHienThi[viTriThuNhat] = arrHienThi[viTriThuHai];
      arrHienThi[viTriThuHai] = k;
    }
  document.querySelector("#ketqua6").innerHTML = arrHienThi;
};

// Sắp xếp tăng dần
document.querySelector("#tangDan").onclick = function () {
  arrHienThi.sort();
  document.querySelector("#ketqua7").innerHTML = arrHienThi;
};

// Tìm SNT đầu tiên
document.querySelector("#soNguyenTo").onclick = function () {
  var sohang = 1;
  var snt = 0;
  for (var i = 0; i < arrHienThi.length; i++) {
    var uoc = 0;
    for (sohang = 1; sohang <= arrHienThi[i]; sohang++)
      if (arrHienThi[i] % sohang == 0) {
        uoc++;
      }
    if (uoc <= 2) {
      snt = "Số nguyên tố đầu tiên của mảng là: " + arrHienThi[i];
      break;
    } else {
      snt = "Mảng không có số nguyên tố";
    }
  }
  document.querySelector("#ketqua8").innerHTML = snt;
};

// Đếm số nguyên
document.querySelector("#demSoNguyen").onclick = function () {
  var demSnt = 0;
  for (var i = 0; i < arrHienThi.length; i++) {
    var uoc = 0;
    for (var soHang = 1; soHang <= arrHienThi[i]; soHang++)
      if (arrHienThi[i] % soHang == 0) {
        uoc++;
      }
    if (uoc <= 2) {
      demSnt++;
    }
  }
  document.querySelector("#ketqua9").innerHTML =
    ` Mảng có tất cả ` + demSnt + " SNT";
};

// So sánh âm và dương
document.querySelector("#soSanh").onclick = function () {
  var duong = 0;
  var am = 0;
  var ketqua10 = "";
  for (var i = 0; i < arrHienThi.length; i++) {
    if (arrHienThi[i] > 0) {
      duong++;
    } else {
      am++;
    }
  }
  if (duong > am) {
    ketqua10 = "Số dương > Số âm";
  } else {
    ketqua10 = "Số âm > Số dương";
  }
  document.querySelector("#ketqua10").innerHTML = ketqua10;
};
