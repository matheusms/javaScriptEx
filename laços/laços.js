//For
function lacoFor(){
//definindo a variável, seu limite e como vai andar
    for (let i=0; i<5; i++){
        console.log("Estou aprendendo!", i);
    }
}

//while
function lacoWhile(){
let i = 5;
    while (i >= 1){
        console.log("Estou aprendendo!", i);
        i--;
    }
}

//do while
function lacoDoWhile(){
    let i = 0;
    do {
        console.log('digitando!', i);
        i++;
    }while(i<20)
}

//for-in
function lacoForIn(){
    const pessoa = {
        nome: 'Matheus',
        idade: 23
    }
    for (let chave in pessoa){
        console.log(chave);
    }
    //outro laço for in
    const cores = ['vermelho', 'azul', 'verde'];
    for(let indice in cores){
        console.log(indice, cores[indice])
    }
}

//for-of
function lacoForOf(){
    const cores = ['vermelho', 'azul', 'verde'];
    for(let cor of cores){
        console.log(cor);
    }

}
