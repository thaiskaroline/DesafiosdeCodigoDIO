//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.const ativos = [];

// Entrada da quantidade de ativos
const quantidadeAtivos = parseInt(gets());

//Entrada dos tipos de ativos
const ativos = [ ];
for (let i = 0; i < quantidadeAtivos; i++) {
  const codigoAtivo = gets();
  ativos.push(codigoAtivo);
}

//TODO: Ordenar os ativos em ordem alfabética.

ativos.sort(function (a, b) {
  return a.localeCompare(b); // Comparando as strings pelo valor alfabético
});

//TODO: Imprimir a lista de ativos ordenada, conforme a tabela de exemplos.

for (let ativo of ativos) { // Percorrendo o array ordenado
  console.log(ativo);
}