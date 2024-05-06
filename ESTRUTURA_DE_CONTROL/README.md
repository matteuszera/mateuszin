
----------------------------------------------------------------------------------------------

O IF é uma estrutura de controle de fluxo que executa um bloco de código se uma condição especificada for verdadeira.
por exmplo:

let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}

------------------------------------------------------------------------------------------------

O ELSE IF é usado em conjunto com if para especificar uma nova condição se a condição anterior do if for falsa.
Ele permite testar várias condições e executar um bloco de código correspondente à primeira condição que for verdadeira.
É útil quando há várias condições exclusivas que precisam ser testadas sequencialmente.

EXEMPLO:

let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
}

--------------------------------------------------------------------------------------------------

O ELSE é uma cláusula opcional que segue um if ou um else if, Ele especifica um bloco de código a ser executado se a condição do if ou de algum else if anterior for falsa.
É usado quando há um bloco de código que deve ser executado se nenhuma das condições anteriores for verdadeira.

EXEMPLO:

let saldoBancario = 500;
let valorCompra = 700;

if (valorCompra <= saldoBancario) {
  console.log("Compra realizada com sucesso!");
} else {
  console.log("Saldo insuficiente. Transação não realizada.");
}

-------------------------------------------------------------------------------------------------------

O SWITCH CASE é uma estrutura de controle que permite que um valor seja testado em relação a uma lista de casos
ele tem algumas funçoes como:
Switch: Define a expressão a ser avaliada
Case: Define os casos possíveis, comparando-os com o valor da expressão
Break: Encerra a execução do switch
Default: Define o caso padrão, a ser executado quando nenhum dos casos corresponder

EXEMPLO:

let opcao = 2;
let mensagem;

switch (opcao) {
  case 1:
    mensagem = "Opção 1 selecionada";
    break;
  case 2:
    mensagem = "Opção 2 selecionada";
    break;
  case 3:
    mensagem = "Opção 3 selecionada";
    break;
  default:
    mensagem = "Opção inválida";
}

console.log(mensagem);

A variável opcao é definida como 2. O switch case verifica o valor de opcao e executa o bloco de código correspondente ao caso 2, que é "Opção 2 selecionada". O break é usado para sair do switch após a execução do bloco de código. Se nenhum caso corresponder, o bloco de código dentro de default será executado, fornecendo a mensagem "Opção inválida".
Isso mostra como o switch case pode ser usado para lidar com múltiplos casos e fornecer diferentes saídas com base em um valor de entrada.

---------------------------------------------------------------------------------------------------------

O FOR LOOP é uma estrutura de repetição que permite executar um bloco de código várias vezes. Ele é especialmente útil quando você sabe exatamente quantas vezes deseja que um bloco de código seja executado.

EXEMPLO:

for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}

Neste exemplo, o for loop é usado para exibir os números de 0 a 4 no console.

O loop continua enquanto a condição i < 5 for verdadeira. Após cada iteração, i é incrementado em 1. Quando i se torna 5, a condição não é mais verdadeira e o loop é encerrado.

-----------------------------------------------------------------------------------------------------------

O WHILE LOOP é uma estrutura de repetição que executa um bloco de código enquanto uma condição especificada for verdadeira. Ele é útil quando você não sabe exatamente quantas vezes um bloco de código precisa ser repetido, mas deseja continuar até que uma condição seja atendida ou deixe de ser atendida.

EXEMPLO:

let contador = 0;

while (contador < 5) {
  console.log("Contador: " + contador);
  contador++;
}

Neste exemplo, o while loop é usado para exibir os números de 0 a 4 no console, é um exemplo simples de como você pode usar o while loop para repetir um bloco de código enquanto uma condição específica for verdadeira





