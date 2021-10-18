// localStorage

document.getElementById('estado').value = localStorage.estado
document.getElementById('dataInicio').value = localStorage.dataInicio
document.getElementById('dataFinal').value = localStorage.dataFinal


var salvarData = function() {
    var estado = document.getElementById('estado').value
    var dataInicio = document.getElementById('dataInicio').value
    var dataFinal = document.getElementById('dataFinal').value
    console.log(estado + dataInicio + dataFinal)
    localStorage.setItem('estado', estado)
    localStorage.setItem('dataInicio', dataInicio)
    localStorage.setItem('dataFinal', dataFinal)

}

document.onchange = salvarData

// criando objetos

// let registro = {}
// registro.Nome = 'Paulo'
// registro.Sobrenome = 'Ponciato'

var dados = []

var registro = {
    ID: 1,
    Nome: 'Paulo',
    Sobrenome: "Souza",
    DtNascimento: 20 / 12 / 2000,
    Formacao: "Direito"
}

var registro2 = {
    ID: 2,
    Nome: "João",
    Sobrenome: "Souza",
    DtNascimento: 03 / 09 / 2001,
    Formacao: "Superior"
}

function PopulaTabelas() {
    if (Array.isArray(dados)) {

        $("#tblDados tBody").html("")

        dados.forEach(function(item) {
            // TEMPLATE STRING

            $("#tblDados tBody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Sobrenome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Formacao}</td>

            </tr>`)



        })
    }
}

$(function() { // executa ao carregar a tela

        dados = JSON.parse(localStorage.getItem("__dados__"))


    })
    // alert(`CIDADES: ${registro.cidades[0]} GRUPOS: ${registro.grupos[0]} CASOS: ${registro.casos[0]}`)

var registro = {
    ID: 1,
    Nome: 'Paulo',
    Sobrenome: "Souza",
    DtNascimento: "20/12 / 2000",
    Formacao: "Direito"
}

var registro2 = {
    ID: 2,
    Nome: "João",
    Sobrenome: "Souza",
    DtNascimento: "03 / 09 / 2001",
    Formacao: "Superior"
}

console.log(registro)
console.log(registro2.Nome)

var produtos = {
    produto: ["carro", "moto", "viagem", "investimento"],
    preco: [50, 15, 20, 500]
}

// console.log(produtos.produto[1])
console.log(produtos.preco[3])
console.log(produtos)