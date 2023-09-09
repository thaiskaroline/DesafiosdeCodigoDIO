//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valor = parseFloat(gets());
const saldo = 0;
if (valor > 0) {
  console.log("Deposito  realizado com sucesso!");
  console.log(`Saldo atual: R$ ${valor.toFixed(2)}`);
  const saldoAtualizado = saldo + valor;
} else if (valor < 0) {
  console.log("Valor invalido! Digite um valor maior que zero.");
} else {
  console.log("Encerrando o programa...");
}