const valorInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const periodo = parseInt(gets());

let valorFinal = valorInicial;

//TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.

for (let i = 0; i < periodo; i++) {
    valorFinal += valorFinal * taxaJuros;
    }




print('Valor final do investimento: R$', valorFinal.toFixed(2));


/*O código que você forneceu é uma função JavaScript que calcula o valor final de um investimento após um determinado período de tempo, levando em consideração os juros compostos. A função recebe três parâmetros:

* `valorInicial`: o valor inicial do investimento
* `taxaJuros`: a taxa de juros anual
* `periodo`: o número de anos do investimento

A função começa criando uma variável chamada `valorFinal` e atribuindo a ela o valor de `valorInicial`. Em seguida, ela entra em um loop `for` que é executado `periodo` vezes. Dentro do loop, a variável `valorFinal` é atualizada para incluir os juros compostos. Após o loop, a função retorna o valor de `valorFinal`.

Aqui está um exemplo de como a função pode ser usada:


​
const valorInicial = 1000;
const taxaJuros = 0.05;
const periodo = 10;
​
const valorFinal = calcularJurosCompostos(valorInicial, taxaJuros, periodo);
​
console.log(valorFinal); // 1628.89
​


A saída da função é 1628.89, que é o valor final do investimento após 10 anos, considerando os juros compostos.*/