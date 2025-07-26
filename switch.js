// cuma bisa masukin value, gabisa pengecekan kondisi
angka = prompt("masukin angka 1 - 2 :");
switch (angka) {
  case "1":
    alert(`kamu masukin angka 1`);
    break;
  case "2":
    alert(`kamu masukin angka 2`);
    break;
  default:
    alert("angka bukan 1 atau 2");
}

/**
 * Kita bisa ilangin aksi & break,
 * ketika beberapa case memiliki 
 * aksi yg sama secara berturut2
 * contoh :
 */
food = prompt(
  `masukin makanan  / minuman : \n cth : nasi, daging, susu, sprite, fanta, ciki`
);

switch (food) {
  case "nasi":
  case "daging":
  case "susu":
    alert("Makanan / minuman sehat");
    break;
  case "sprite":
  case "fanta":
  case "ciki":
  case "chiki":
    alert("Makanan / minuman ga sehat");
    break;
  default:
    alert("sesuai contoh woii");
}
