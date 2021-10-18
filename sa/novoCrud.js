let dados2 = []

function PopulaTabela() {
    if (Array.isArray(dados2)) {
        document.getElementById("tblDados").value = ''

        dados2.forEach(function(item) {
            //TEMPLATES STRING
            $("#tblDados tbody").append(`<tr>
            <td>${item.ID}</td>
            <td>${item.Nome}</td>
            <td>${item.Sobrenome}</td>
            <td>${item.Email}</td>
            <td>${item.Telefone}</td>
          </tr> `)

        })
    }

}

function Add() {

    // EXECUTA AO CARREGAR DA TELA
    dados2 = JSON.parse(localStorage.getItem("__dados2__"))
    if (dados2) {
        PopulaTabela()

    }


}