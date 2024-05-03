var nome = "Mateus";

let sobrenome = "Augusto";

console.log(nome);

console.log(sobrenome);

if(true){
    var nome2 = "Erica";

}

console.log(nome2);

if(true){
    let nome3 = "Erica 3";

}

//console.log(nome3);


//  let nome = "Matheus"; // String

let numero= 1; // Inteiro

let numero1= 1.15; // Decimais 

let verdade = true; // Booleano

let texto; // Indefino;

let texto02 = null; // Vazio


// Adição

let num1 = 3;
let num2 = 2;

console.log(num1 + num2);

// Subtração
console.log(num1 - num2);

// Mutiplicação
console.log(num1 * num2);

// Divição
console.log(num1 / num2);

// Potência
console.log(num1 ** num2);

// Modulo
console.log(num1 % num2);



// Operadores de comparação

console.log(5 == "5"); // igual

console.log("5" === "5"); // idêntico

console.log(5 > 7); //falso , maior

console.log(5 < 7); //verdadeiro, menor

console.log(5 <=  5); //verdadeiro, menor e igual

console.log(5 >= 5); //falso, maior e igual

console.log(5 !== 5); //falso, não idêntico


// Operadores Lógicos

/*
 E &&

 ou ||

 não !

*/

let a = 5;
let b = 10;

console.log (a > 0  && b > 5); // Verdadeiro

console.log (a > 0  || b > 15); // Verdadeiro


console.log ( !b );
console.log ( a > 3 && !b >-50);

let reposta = confirm("O Palmeiras tem Mundial ?")
console.log (reposta);

let reposta2 = prompt ("Qual o seu nome?");
console.log(reposta2);