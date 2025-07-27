var penumpang = ["sanghika", undefined, "doddy"];

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

console.log(tambahPenumpang("hadil", penumpang));
console.log(tambahPenumpang("hadil", penumpang));
console.log(tambahPenumpang("asnawi", penumpang));
