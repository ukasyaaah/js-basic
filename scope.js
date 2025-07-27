var a = 1;

function cek() {
  // Selalu pake key var, let, const,
  // Biar ga dianggap global scope
  var a = 2;
}

cek();

// output : 1
console.log(a);
