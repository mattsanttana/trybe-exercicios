const anguloTriangulo1 = 50;
const anguloTriangulo2 = 100;
const anguloTriangulo3 = 30;

let somaAngulos = anguloTriangulo1 + anguloTriangulo2 + anguloTriangulo3;

let angulosPositivos = anguloTriangulo1 > 0 && anguloTriangulo2 > 0 && anguloTriangulo3 > 0;

if(angulosPositivos){
  if (somaAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}