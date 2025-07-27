var Orang = {
  // properti -> variable pd object
  nama: "Ari Awan",
  jurusan: "TI",
  hobi: ["ngoding", "mbaca", "mewarnai"],

  // Method -> funct pd object
  sapa: function (nama) {
    return `Hi ${nama}, nama saya ${this.nama}`;
  },
};

// bisa titik . , bisa kurung siku []
console.log(Orang.sapa("Afif"));
console.log(Orang[`hobi`][1]);
console.log(Orang.hobi[1]);
