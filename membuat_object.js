// Obj Literal
var mhs = {
  nama: "",
  nim: "",
  jurusan: "",
};

// Function Declaration
function objMhs(nama, nim, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs1 = objMhs("feri", "7498932", "DKV");
console.log(mhs1);

// Constructor -> funct yg khusus utk bikin obj
// bakal sering dipake
// penamaan diawali huruf besar
// wajib menggunakan keyword new
class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }
}

var mhs2 = new Mahasiswa("Ukhasyah", "23233", "RPL");
