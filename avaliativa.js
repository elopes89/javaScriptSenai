function GerarMedia() {

    let totalMedia = 0
    let totalPeso = 0
    let resultado = ''
    let cont = 0
    bool = true
    vazio = false
    total = 0
    boletim = {
        atvs: [],
        pesos: [],
        notas: []
    }

    for (i = 0; i < 5; i++) {
        boletim.atvs.push(document.getElementById("ativ" + i).value)
        boletim.notas.push(Number(document.getElementById("nota" + i).value))
        boletim.pesos.push(Number(document.getElementById("peso" + i).value))

    }

    // VERIFICA SE HÁ ALGUM CAMPO VAZIO
    Verifica()

    // VERIFICAÇÕES


    for (i = 0; i < 5; i++) {
        if (!Number.isInteger(boletim.pesos[i]) || boletim.pesos[i] > 5 || boletim.pesos[i] < 1 && boletim.pesos[i] != '') {
            cont++
        }
    }
    if (cont != 0) {
        alert('PESO DEVE ESTAR ENTRE 1 E 5 E SER INTEIRO')
        document.getElementById("resultado").value = ''
        document.getElementById("media").value = ''
    }


    for (i = 0; i < 5; i++) {
        if (boletim.notas[i] > 10 || boletim.notas[i] < 0) {
            bool = false

        }
    }
    if (bool == false) {
        alert(' NOTA DEVE SER MENOR QUE 10 \n E MAIOR OU IGUAL À 0')
        document.getElementById("resultado").value = ''
        document.getElementById("media").value = ''
    }


    for (i = 0; i < 5; i++) {
        totalMedia += boletim.notas[i] * boletim.pesos[i]
    }
    totalPeso = boletim.pesos.reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual
    })

    total = totalMedia / totalPeso
    if (cont == 0 && bool == true && vazio == false) {

        if (total >= 7) {
            resultado = 'APROVADO'
        } else if (total >= 5) {
            resultado = 'RECUPERAÇÃO'
        } else {
            resultado = 'REPROVADO'
        }

        document.getElementById("media").value = total.toFixed(1)
        document.getElementById("resultado").value = resultado
    }

    function Verifica() { // VERIFICA SE HÁ ALGUM CAMPO VAZIO
        for (i = 0; i < 5; i++) {
            if (document.getElementById("peso" + i).value == '' || document.getElementById("nota" + i).value == '' || document.getElementById("ativ" + i).value == '') {
                document.getElementById("resultado").value = ''
                document.getElementById("media").value = ''
                vazio = true
            }
        }
        if (vazio == true)
            alert('PREENCHA TODOS OS CAMPOS')

    }
}

function Limpar() {

    for (i = 0; i < 5; i++) {
        document.getElementById("peso" + i).value = ''
        document.getElementById("nota" + i).value = ''
        document.getElementById("ativ" + i).value = ''
    }
    document.getElementById("resultado").value = ''
    document.getElementById("media").value = ''

}