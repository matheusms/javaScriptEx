
//metodo par aler as propriedades de um objeto
//exibindo apenas as que sao STRINGS

const filme = {
    titulo: 'StarWars',
    ano: 2017,
    diretor: 'Rian Johnson',
    personagem: 'Rey'
}

exibirStrings(filme);
function exibirStrings(obj){
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}