//operadores aritimeticos

let salario = 100;

console.log(salario + salario); //soma
console.log(salario - salario); //subtração
console.log(salario * salario); //multiplicação
console.log(salario / salario); //divisão
console.log(salario ** salario); //exponencial

// ++ e --
//operadores de incremento e decremento
let idade = 18;

console.log(++idade);
//muda se colocar os operadores antes e depois
//se for depois a operação so acontece depois de mostrar na tela

//operadores de igualdade
//igualdade estrita
console.log(1 === 1);//compara os valores e o tipo


//igualdade solta
console.log(1 == '1'); //compara independente do tipo

//operador ternário
//ex se for acima de 100 é premium
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
//compara se é maior que 100, primeiro é a afirmação e depois a negativa
console.log(tipo)