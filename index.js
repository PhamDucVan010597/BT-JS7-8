var arrHienThi = [];
document.querySelector("#themSo").onclick = function () {
  var arrInput = [];
  var input = +document.querySelector("#input").value;
  arrInput.push(input);
  arrHienThi += arrInput + ",";
  document.querySelector("#duLieuNhap").innerHTML = arrHienThi;
  console.log(arrHienThi);
};

document.querySelector("#duLieuNhap").innerHTML;
// Tính tổng dương
document.querySelector("#tinhTong").onclick = function () {
  var tongDuong = 0;
  for (var i = 0; i <= arrHienThi.length; i++) {
    if (arrHienThi[i] % 2 === 0) {
      tongDuong += arrHienThi[i];
    }
  }
  document.querySelector("#ketqua1").innerHTML = tongDuong;
};
