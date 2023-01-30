const notaPassada = 76;

if (notaPassada < 0 || notaPassada > 100) {
  console.log("Erro, tente novamente");
} else if (notaPassada >= 90) {
  console.log("A");
} else if (notaPassada >= 80) {
  console.log("B");
} else if (notaPassada >= 70) {
  console.log("C");
} else if (notaPassada >= 60) {
  console.log("D");
} else if (notaPassada >= 50) {
  console.log("E");
} else {
  console.log("F");
}