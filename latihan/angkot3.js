jmlAngkot = 10;
angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot > angkotBeroperasi) {
    console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
  } else {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  }
}

// atau bisa juga kek gini
for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  } else {
    console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
  }
}
