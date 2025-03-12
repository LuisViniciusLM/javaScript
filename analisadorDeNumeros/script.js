let num = document.getElementById('num')
let numAdicionados = document.getElementById('nAdicionados')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}  
function adicionarNum() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // O ponto de "!" é utilizado como negação, ele inverte o valor.
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado!`
        numAdicionados.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Deixando a caixa vazia do input.
    num.focus() // Dando foco ao input do Número.
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma / valores.length
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</P>`
        res.innerHTML += `<p>O maior valor cadastrados foi ${maior}</P>`
        res.innerHTML += `<P>O menor valor cadastrado foi ${menor}</p>`
        res.innerHTML += `<P>Somando todos os valores, temos ${soma}</P>`
        res.innerHTML += `<P>A média dos valores é igual a ${media}</P>`
    }
}