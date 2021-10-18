usuario = []

registro = {
    login: [],
    senha: []
}


function Salvar() {
    localStorage.setItem("login", document.querySelector("#login").value)
    localStorage.setItem("senha", document.querySelector("#senha").value)



    registro.login.push(localStorage.login)
    registro.senha.push(localStorage.senha)

    alert(`LISTA DE LOGIN: ${registro.login}`)
    alert(`LISTA DE SENHA: ${registro.senha}`)

    usuario.push(localStorage.login)
    usuario.push(localStorage.senha)

    alert('vetor usuario: ' + usuario)
}