var Orang = {
  // properti -> variable pd object
  nama: "Ari Awan",
  jurusan: "TI",
  hobi: ["ngoding", "mbaca", "mewarnai"],

  // Method -> funct pd object
  sapa: function () {
    return `Hi, nama saya ${this.nama}`;
  },
};

// bisa titik . , bisa kurung siku []
console.log(Orang.sapa());
console.log(Orang[`hobi`][1]);
console.log(Orang.hobi[1]);
