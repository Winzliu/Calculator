function masukkan(angka) {
  document.getElementById("layar").value += angka;
}
function hapus() {
  document.getElementById("layar").value = "";
}
function akhir() {
  var jawab = document.getElementById("layar").value;
  var table = document.getElementById("table");
  const kolom = document.createElement('tr');
  table.appendChild(kolom);
  const perhitungan = document.createElement('td');
  perhitungan.innerHTML = jawab;
  kolom.appendChild(perhitungan);
  const hasil = document.createElement('td');
  hasil.innerHTML = eval(jawab);
  kolom.appendChild(hasil);
  if (jawab) {
    document.getElementById("layar").value = eval(jawab);
  }
  
}
function backspace() {
  var a = document.getElementById("layar").value;
  document.getElementById("layar").value = a.substring(0, a.length - 1);
}