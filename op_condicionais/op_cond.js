//If e Else

let hora = 10;

if(hora > 6 && hora < 12){
    console.log("bom dia");
}
else if(hora > 12 && hora < 18){
    console.log("boa tarde");
}
else{
    console.log("boa noite");
}

//Switch e Case
let permissao; // comum, gerente, diretor
permissao = 'gerente';
switch(permissao){
    case 'comum':
        console.log('É um usuário comum');
        break;
    
    case 'gerente':
        console.log('É um usuário gerente');
        break;
    
    case 'diretor':
        console.log('É um usuário diretor');
        break;
    
    default :
        console.log('Usuário não reconhecido');
        break;
}