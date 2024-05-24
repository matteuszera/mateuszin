const botao = document.querySelector("button");

botao.addEventListener('click', function(){ 
    console.log('botao clicado!');
});




const formulario = document.querySelector("#exemplo_form");

formulario.addEventListener("submit", function(event){
     event.preventDefault();
});


let numero_string = "10.25";

numero = parseFloat(numero_string);

console.log(typeof(numero));


const tabela = document.querySelector("#tabela");
let linha_nova = tabela.insertRow();
let celula_nova = linha_nova.insertCell()
let celula_nova2 = linha_nova.insertCell();;

celular_nova.innerHTML = "Teste";
celula_nova2.innerHTML = "10";


let texto = document.querySelector("#exemplo_1");
texto.innerHTML = "<p> Texto - Mateus </p>";
//texto.textContent = "<p> Texto - Mateus2</p>";


let numero_fixa = 2.34567;
console.log(numero_fixa.toFixed());

formulario2.addEventListener("subit", function(event){
      event.preventDefault();
      document.querySelector("#exemplo_form2").reset();
});






