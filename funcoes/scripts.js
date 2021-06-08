//criando uma função
//para criar utilizar Verbo + Substantivo no nome

let corSite = "azul";

//função que nao devolve nada
function mudaCor(cor, tonalidade){ //passando como parametros
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
mudaCor("vermelho", "escuro")
console.log(corSite);

//função que tem um retorno
function MultiplicaValorPorDois(valor){
    return valor*2
}

let resultado = MultiplicaValorPorDois(5)

console.log(resultado)