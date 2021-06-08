//operador logico e (&&)
//retorna True se os dois operandos forem true

let maiorDeIdade = true;
let carteiraTrabalho = false;
//se possuir carteira e for maior de idade pode aplicar
let podeAplicar = maiorDeIdade && carteiraTrabalho;
console.log(podeAplicar);


//operador logico ou (||)
//retorna True se um dos operandos forem true
let podeAplicar2 = maiorDeIdade || carteiraTrabalho;
//pode aplicar se possuir um ou outro
console.log(podeAplicar2);

//operador NOT (!)
let candidatoRecusado = !podeAplicar
console.log(candidatoRecusado)