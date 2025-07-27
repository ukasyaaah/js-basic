array = ["a", 1, true, [4, 5, 6]];

console.log(array[3][1]);

alamat = ["Semarang", "Central Java"];
console.log(alamat.join(" - "));

//1. Push : nambah elemen diakhir array
alamat.push("Indonesia", "Bumi");

//2. Pop : hapus elemen diakhir array
alamat.pop();
console.log(alamat);

//3. Shif : Hapus elemen diawal array
alamat.shift();

//4. Unshift : tambah elemen diawal array
alamat.unshift("Masaran", "Sragen");
console.log(alamat);

//5. Splice : nambah elemen pada array
nama = ["Ukhasyah"];
nama.splice(1, 0, "Zufar", "Hani");

//6. Slice : mengiris array, jadi array baru
negara = ["Indonesia", "Malaysia", "Jakarta", "Bekasi", "Singapore"];

kota = negara.slice(2, 4);
console.log(kota);

//7. foreach
mhs = ["ari", "dito", "ayu"];

mhs.forEach((e) => {
  console.log(`${e} adalah mahasiswa`);
});

// klo mau pake indeks
mahasiswa = mhs.forEach((elemen, indeks) => {
  return `mahasiswa ${indeks} adalah ${elemen}`;
});

//8. Map -> return array
listNama = ["andi", "budi", "bintang"];

nama = listNama.map((e) => {
  return e;
});

console.log(mahasiswa);
console.log(nama.join(" - "));
console.log(nama);

///9. Sort -> Urutin array
acak = [3, 7, 0, 2, 30, 9, 5, 20];

//  0, 2, 20, 3, 30, 5, 7, 9
console.log(acak.sort());

//  0, 2, 3, 5, 7, 9, 20, 30
console.log(acak.sort((a, b) => a - b));

// 10. filter & find
angka = [1, 2, 3, 4, 6, 7, 9, 8];

// cari nilai > 4
filter = angka.filter((n) => n > 4);
find = angka.find((n) => n > 4);

console.log(filter);
console.log(find);
