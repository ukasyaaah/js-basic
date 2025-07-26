console.log("Hellow");
console.log("Aku Ukhasyah");

str = "";
for (baris = 10; baris > 0; baris--) {
  for (kolom = 0; kolom < baris; kolom++) {
    str += ` * `;
  }
  str += "\n";
}
console.log(str);
