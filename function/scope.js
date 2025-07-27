var a = 1;

function cek() {
  // Selalu pake key var, let, const,
  // Biar ga dianggap global scope
  var a = 2;
}

cek();

// funct tanpa var (global scope) = 2
// funct dgn var (local scope) = 1
console.log(a);
console.log("--------------------------");

function printB(hehe) {
  console.log(hehe);
}
b = 12;
printB(b); // 12
