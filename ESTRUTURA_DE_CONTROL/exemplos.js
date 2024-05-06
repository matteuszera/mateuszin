
let idade = 18;
                          //EXEMPLO IF
if (idade >= 18) {     
  console.log("Você é maior de idade.");
}


let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");       //EXEMPLO ELSE IF
} else if (hora < 18) {
  console.log("Boa tarde!");
}


let saldoBancario = 500;
let valorCompra = 700;

if (valorCompra <= saldoBancario) {                  //EXEMPLO ELSE
  console.log("Compra realizada com sucesso!");
} else {
  console.log("Saldo insuficiente. Transação não realizada.");
}

let opcao = 2;
let mensagem;

switch (opcao) {
  case 1:
    mensagem = "Opção 1 selecionada";
    break;
  case 2:
    mensagem = "Opção 2 selecionada";                  //EXEMPLO SWITCH CASE
    break;
  case 3:
    mensagem = "Opção 3 selecionada";
    break;
  default:
    mensagem = "Opção inválida";
}



for (let i = 0; i < 5; i++) {           //EXEMPLO FOR LOOP
    console.log("Número: " + i);
  }
  

  let contador = 0;

  while (contador < 5) { 
    console.log("Contador: " + contador);        //EXEMPLO WHILE LOOP
    contador++;
  }
  