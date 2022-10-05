function masukkan(angka) {
  document.getElementById("layar").value += angka;
}
function hapus() {
  document.getElementById("layar").value = "";
}
function akhir() {
  var hasil = document.getElementById("layar").value;
  if (hasil) {
    document.getElementById("layar").value = eval(hasil);
  }
}
function backspace() {
  var a = document.getElementById("layar").value;
  document.getElementById("layar").value = a.substring(0, a.length - 1);
}