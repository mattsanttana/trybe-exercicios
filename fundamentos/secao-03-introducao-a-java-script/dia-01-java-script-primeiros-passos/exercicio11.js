const valorDoProduto = 1;
const valorVenda = 3;

if (valorDoProduto >= 0 && valorVenda >= 0) {
  const valorTotalProduto = valorDoProduto * 1.2;
  const lucroTotal = (valorVenda - valorTotalProduto) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Error, os valores não podem ser negativos");
};
