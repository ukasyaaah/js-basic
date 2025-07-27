var penumpang = ["asnawi", "amba", "akwikwok"];

tambahPenumpang = function (nama, penumpang) {
  for (i = 0; i < penumpang.length; i++) {
    if (penumpang.length == 0) {
      penumpang.push(nama);
      return penumpang;
    } else {
      if (penumpang[i] == undefined) {
        penumpang[i] = nama;
        return penumpang;
      } else if (penumpang[i] == nama) {
        console.log(`${nama} udah ada di angkot`);
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(nama);
        return penumpang;
      }
    }
  }
};

hapusPenumpang = function (nama, penumpang) {
  for (i = 0; i <= penumpang.length; i++) {
    if (penumpang.length === 0) {
      console.log("Angkotnya kosong");
      return penumpang;
    } else {
      if (penumpang[i] == nama) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (penumpang.find((cari) => cari == nama) == null) {
        console.log(`${nama} ga ada di angkot`);
        return penumpang;
      }
    }
  }
};

console.log(tambahPenumpang("hadil", penumpang));
console.log(tambahPenumpang("hadil", penumpang));
console.log(tambahPenumpang("asnawi", penumpang));
console.log(hapusPenumpang("miaw", penumpang));
console.log(hapusPenumpang("asnawi", penumpang));
console.log(hapusPenumpang("amba", penumpang));
console.log(tambahPenumpang("billie", penumpang));
console.log(tambahPenumpang("brian", penumpang));
console.log(hapusPenumpang("heh", penumpang));
console.log(hapusPenumpang("akwikwok", penumpang));

