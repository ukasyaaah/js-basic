// Contoh looping hell
function test() {
  //   return test();
}
test();

function kurangAngka(n) {
  if (n == -1) return;
  console.log(n);
  return kurangAngka(n - 1);
}

kurangAngka(12);
