//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados
let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());

//TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.

const saldoDisponivel = saldoTotal;

if (saldoDisponivel >= valorSaque){
  const novoSaldo = saldoDisponivel - valorSaque;
  console.log(`Saque realizado com sucesso. Novo saldo: ${novoSaldo}`);
}else {
  console.log("Saldo insuficiente. Saque nao realizado!");
}