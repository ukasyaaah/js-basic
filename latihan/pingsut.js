lagi = true;
while (lagi) {
  user = prompt("pilih : batu, gunting, kertas");

  comp = Math.random();

  if (comp < 0.3) {
    comp = "batu";
  } else if (comp >= 0.3 && comp < 0.6) {
    comp = "gunting";
  } else {
    comp = "kertas";
  }

  var hasil;
  if (comp == user) {
    hasil = "Seri!";
  } else if (user == "batu") {
    hasil = comp == "gunting" ? "Menang" : "Kalah!";
  } else if (user == "gunting") {
    hasil = comp == "batu" ? "Kalah" : "Menang";
  } else if (user == "kertas") {
    hasil = comp == "batu" ? "Menang" : "Kalah!";
  } else {
    hasil = "salah pilih";
  }

  alert(`kamu milih : ${user}, komputer milih ${comp}, kamu ${hasil}`);
  lagi = confirm("Lagi?");
}
