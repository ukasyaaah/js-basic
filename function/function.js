// Deklarasi
function jumlah(a, b) {
  return a + b;
}

// Ekspresi / Expression -> disimpan dlm variable
kali = function (a, b) {
  return a * b;
};

console.log(kali(2, 4));

function jumlahVolumeDuaKubus(si, su) {
  si *= si *= si;
  su *= su *= su;
  return si + su;
}

/**
 * Klo argumen lebih banyak dari param,
 * maka argumen lebihnya akan diabaikan
 */
console.log(jumlah(5, 5, 5));

/**
 * Klo param lebih banyak, maka
 * param kelebihannya akan diisi
 * dg nilai undefined
 *
 */
function kurang(a, b, c) {
  return a - b - c;
}

// undefined & Outputnya NaN
console.log(kurang(4, 3));

// array yg berisi nilai
// yg dikirim saat funct dipanggil
function math() {
  hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }

  return hasil;
}

console.log(math(1, 2, 3));

