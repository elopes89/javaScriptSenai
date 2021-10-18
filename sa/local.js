produtos = []

registro = {
    lista: [],
    preco: []
}


// Atualizar()

// function Atualizar() {
//     document.querySelector("#nome").value = ""
//     Atualizar()

//     // document.querySelector.value("#nome") = localStorage.getItem("nome")
//     document.querySelector("p").innerHTML = "SEU NOME É: " + localStorage.getItem("nome")
// }

function Salvar() {
    localStorage.setItem("nome", document.querySelector("#nome").value)
    localStorage.setItem("preco", document.querySelector("#preco").value)



    registro.lista.push(localStorage.nome)
    registro.preco.push(localStorage.preco)

    alert(`LISTA DE PRODUTOS: ${registro.lista}`)
    alert(`LISTA DE PREÇOS: ${registro.preco}`)



    // produtos.push(localStorage.nome)
    // produtos.push(localStorage.preco)
    // alert(produtos)


}