let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inLista (n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adiciona() {
        
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' //Limpa o campo quando um novo numero eh adicionado depois de ja ter sido finalizado.
    }else {
        window.alert('[ERRO] Numero invalido ou ja encontrado na lista!')
    }
    num.value = ''//Estes dois comandos zeram o campo de adicao de valores apos o valor ser adicionado.
    num.focus()
}

function fim() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>O total de numeros adicionados é: ${total}</p>`
        res.innerHTML += `<p>O maior valor informado: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado: ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores: ${soma}</p>`
        res.innerHTML += `<p>A media dos valores: ${media}</p>`
    }
}
