var nome = "Robert"
let idade = 18
const linguagem = "JS"

function nomeCompleto(nome, sobrenome) { // 1 forma de fazer uma função
    nome_completo = `${nome} ${sobrenome}`
    return nome_completo
}

const nCompleto = function(nome, sobrenome) { // 2 forma de fazer uma função (anonima)
    nome_completo = `${nome} ${sobrenome}`
    return nome_completo
}

const nmCompleto = (nome, sobrenome) => { // 3 forma de fazer uma função (Arroy Function)
    nome_completo = `${nome} ${sobrenome}`
    return nome_completo
} 


const user = {
    id: 10,
    nome: "Robert",
    sobrenome: "Rudi",

    email: "robertrudi@gmail.com",
    endereco: {
        rua: "rua que n existe",
        numero: 171
    },
    nome_completo: (nome, sobrenome) => { // 3 forma de fazer uma função (Arroy Function)
    nome_completo = `${nome} ${sobrenome}`
    return nome_completo
    }
}

const idAdmins = [1, 7, 11, 10]

console.log(`Olá ${user.nome_completo(user.nome, user.sobrenome)}, seja bem-vindo!`)
