let dados2 = []

function ApagaRegistro(id) {
    let confirma = confirm("DESEJA REALMENTE EXCLUIR ESSE REGISTRO?")
    if (confirma) {
        for (let i = 0; i < dados2.length; i++) {
            if (dados2[i].ID == id)
                dados2.splice(i, 1)
        }
    }

    PopulaTabela()

}

function EditaRegistro(id) {
    $("#ExemploModalCentralizado").modal("show")

    dados2.forEach(function(item) {
        if (item.ID == id) {
            $("#hdID").val(item.ID)
            $("#textNome").val(item.Nome)
            $("#textSobrenome").val(item.Sobrenome)
            $("#textEmail").val(item.Email)
            $("#numberTelefone").val(item.Telefone)

        }


    })

}



function PopulaTabela() {
    if (Array.isArray(dados2)) {

        localStorage.setItem("__dados2__", JSON.stringify(dados2))

        $("#tblDados tbody").html("")

        dados2.forEach(function(item) {
            //TEMPLATES STRING
            $("#tblDados tbody").append(`<tr>
            <td>${item.ID}</td>
            <td>${item.Nome}</td>
            <td>${item.Sobrenome}</td>
            <td>${item.Email}</td>
            <td>${item.Telefone}</td>
            <td><button type="button" class="btn btn-primary" onclick="javascript: EditaRegistro(${item.ID})"><i class="fa fa-edit"/></button></td>
            <td><button type="button" class="btn btn-danger" onclick="javascript: ApagaRegistro(${item.ID})"><i class=" fa fa-trash"/></button></td>

          </tr> `)

        })
    }

}
$(function() {

    // EXECUTA AO CARREGAR DA TELA
    dados2 = JSON.parse(localStorage.getItem("__dados2__"))
    if (dados2) {
        PopulaTabela()
    }

    $("#btnSalvar").click(function() {

        let _id = $("#hdID").val()
        let Nome = $("#txtNome").val()
        let Sobrenome = $("#txtSobrenome").val()
        let Email = $("#txtEmail").val()
        let Telefone = $("#numberTelefone").val()

        let registro = {}



        if (!_id || _id == "0") {
            registro.Nome = Nome
            registro.Sobrenome = Sobrenome
            registro.Email = Email
            registro.Telefone = Telefone
            registro.ID = dados2.length + 1
            dados2.push(registro)
        } else {
            dados2.forEach(function(item) {
                if (item.ID == _id) {
                    item.Nome = Nome
                    item.Sobrenome = Sobrenome
                    item.Email = Email
                    item.Telefone = Telefone
                }
            })
        }



        alert("REGISTRO SALVO COM SUCESSO")
        $("#ExemploModalCentralizado").modal("hide")

        $("#hdID").val()
        $("#textNome").val("")
        $("#textSobrenome").val("")
        $("#textEmail").val("")
        $("#numberTelefone").val("")


        PopulaTabela()

    })

})