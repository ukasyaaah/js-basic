function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  this.penumpangNaik = function (namaPenumpang) {
    penumpang.push(namaPenumpang);
    return penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Blm ada penumpang");
      return false;
    } else {
      for (i = 0; i <= penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          console.log(`${namaPenumpang} telah keluar`);
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        }
      }
    }
  };
}

var ang1 = new Angkot("Tom Cruise", "Banyumanik - Ungaran", [], 0);
var ang2 = new Angkot("Ari Aster", "Banyumanik - Ungaran", [], 0);

ang1.penumpangNaik("Tom");
ang1.penumpangNaik("Lady Gaga");
ang1.penumpangTurun("Lady Gaga", 30000);
ang1.penumpangTurun("Tom", 20000);
console.log(ang1);
