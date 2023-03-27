const objs = [ 
    {
    nome: "Matheus",
    idade: 30,
    esta_trabalhando: true,
    detyalhes_profissao: {
        profissao: "Programador",
        empresa: "Empresa X"
    },
    hobbies: ["Programar", "Correr", "Ler"]
    },
    {
        nome: "João",
        idade: 25,
        esta_trabalhando: false,
        detyalhes_profissao: {
            profissao: null,
            empresa: null
        },
        hobbies: ["Jogar", "Academia"]
    }
]

//JSON
// converter objeto para json
const jsonData = JSON.stringify(objs) //stringify converte o js para json

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto 
const objData = JSON.parse(jsonData) // o elemento "parse" converte o json para o javascript

console.log(objData)

console.log(typeof objData)

objData.map((pessoa) => { // " map " é um metodo para perccorrer ARRAYS de objeto
    console.log(pessoa.nome)
})